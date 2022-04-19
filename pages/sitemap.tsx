import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

export default function Sitemap() {}

type Url = {
  host: string;
  route: string;
  date?: Date;
};

const excludedRoutes: Array<string> = ['/_app', '/_document', '/sitemap'];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const basePath: string = process.cwd();
  const routes_manifest: object | null = readManifestFile(basePath);
  const host: string = 'https://www.andrijakapetanovic.com/';

  let routes: Array<Url> = getPathsFromManifest(routes_manifest, host);
  const pagesPath = path.join(basePath + '/.next/server/pages/');
  routes = routes.concat(
    getPathsFromBuildFolder(pagesPath, [], host, pagesPath)
  );

  routes = routes.filter((el) => !excludedRoutes.includes(el.route));
  const sitemap: string = getSitemapXml(routes);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

const readManifestFile = (basePath: string): object | null => {
  const routes_manifest_path = path.join(
    basePath + '/.next/server/pages-manifest.json'
  );

  if (fs.existsSync(routes_manifest_path)) {
    const raw_json = fs.readFileSync(routes_manifest_path);
    return JSON.parse(raw_json.toString());
  } else return null;
};

const getPathsFromManifest = (manifest: any, host: string): Array<Url> => {
  let routes: Array<string> = [];

  for (let [route, file] of Object.entries(manifest)) {
    if (!isNextInternalUrl(route)) {
      routes = routes.concat(route);
    }
  }

  let sitemapUrls: Array<Url> = [];
  routes.forEach((route) => {
    sitemapUrls.push({ host: host, route: route });
  });

  return sitemapUrls;
};

const isNextInternalUrl = (path: string): boolean => {
  return new RegExp(/[^\/]*^.[_]|(?:\[)/g).test(path);
};

const getPathsFromBuildFolder = (
  dir: string,
  urlList: Array<Url>,
  host: string,
  basePath: string
): Array<Url> => {
  const files: string[] = fs.readdirSync(dir);
  urlList = urlList || [];

  files.forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      urlList = getPathsFromBuildFolder(
        dir + file + '/',
        urlList,
        host,
        basePath
      );
    } else {
      if (path.extname(file) === '.json') {
        let route = path.join(dir + file.substring(0, file.length - 5));
        route = route.replace(basePath, '/');
        urlList.push({ host: host, route: route });
      }
    }
  });

  return urlList;
};

const getUrlElement = ({ host, route, date }: Url): string => {
  if (date) {
    return `<url><loc>${host}${route}</loc><lastmod>${date}</lastmod></url>`;
  } else return `<url><loc>${host}${route}</loc></url>`;
};

const getSitemapXml = (
  urls: Array<Url>
): string => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => getUrlElement(url)).join('')}
  </urlset>
`;
