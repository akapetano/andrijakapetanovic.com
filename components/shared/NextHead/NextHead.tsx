import Head from 'next/head';

interface INextHeadProps {
  title: string;
}

export default function NextHead({ title }: INextHeadProps) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Andrija KapetanoviÄ‡ - Front-end Developer"
      />
      <title>{title}</title>
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          title
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="google-site-verification"
        content="BQ2RB3sAhryGbULmIDs46FzavlFvGCi61ZbcIdEh1KA"
      />
    </Head>
  );
}
