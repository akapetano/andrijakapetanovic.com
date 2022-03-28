import Layout from '../components/Layout';
import Head from 'next/head';
import BackToHome from '../components/BackToHome';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <BackToHome />
    </Layout>
  );
}
