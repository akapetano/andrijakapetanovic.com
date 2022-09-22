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
        content="Andrija Kapetanović - Front-end Developer"
      />
      <title>{title}</title>
      <meta
        property="og:image"
        content="https://www.andrijakapetanovic.com/images/andrija-kapetanovic.jpg"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="834" />
      <meta property="og:image:height" content="834" />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="google-site-verification"
        content="BQ2RB3sAhryGbULmIDs46FzavlFvGCi61ZbcIdEh1KA"
      />
    </Head>
  );
}
