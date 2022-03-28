import Layout from '../components/core/Layout/Layout';
import LayoutHeader from '../components/core/Layout/LayoutHeader';
import LayoutMain from '../components/core/Layout/LayoutMain';
import NextHead from '../components/NextHead';
import BackToHome from '../components/BackToHome';

export default function Portfolio() {
  return (
    <Layout>
      <NextHead title="About" />
      <LayoutHeader />
      <LayoutMain />
      <BackToHome />
    </Layout>
  );
}
