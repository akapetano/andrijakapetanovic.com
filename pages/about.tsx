import Layout from '../components/Layout';
import Head from 'next/head';
import BackToHome from '../components/BackToHome';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <BackToHome />
    </Layout>
  );
}
