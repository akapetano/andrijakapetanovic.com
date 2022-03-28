import Layout from '../components/core/Layout/Layout';
import NextHead from '../components/NextHead';
import LayoutHeader from '../components/core/Layout/LayoutHeader';
import BackToHome from '../components/BackToHome';
import LayoutMain from '../components/core/Layout/LayoutMain';

export default function About() {
  return (
    <Layout>
      <NextHead title="About" />
      <LayoutHeader />
      <LayoutMain />
      <BackToHome />
    </Layout>
  );
}
