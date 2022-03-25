import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, my name is <strong>Andrija</strong>. I&apos;m a front-end
          developer. You can contact me on{' '}
          <a
            href="https://twitter.com/AndiKapetanovic"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
