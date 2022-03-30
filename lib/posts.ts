import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface IPostData {
  slug: string;
  title: string;
  date: string;
}

export interface IPostDataWithContent {
  slug: string;
  contentHtml: string;
  title: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), '_posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    return { slug, ...data } as IPostData;
  });
  // Sort posts by date
  return allPostsData.sort(({ date: dateA }, { date: dateB }) => {
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  //     // Return an array that looks like this:
  //     // [
  //     //   {
  //     //     params: {
  //     //       slug: 'ssg-ssr',
  //     //     },
  //     //   },
  //     //   {
  //     //     params: {
  //     //       slug: 'pre-rendering',
  //     //     },
  //     //   },
  //     // ];
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug
  return {
    slug,
    contentHtml,
    ...data,
  };
}
