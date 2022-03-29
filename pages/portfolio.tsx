import Layout from '../components/shared/Layout/Layout';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';
import NextHead from '../components/shared/NextHead/NextHead';
import BackToHome from '../components/shared/BackToHome/BackToHome';
import Footer from '../components/shared/Footer/Footer';

export default function Portfolio() {
  return (
    <Layout>
      <NextHead title="About" />
      <LayoutHeader />
      <LayoutMain />
      <BackToHome />
      <Footer />
    </Layout>
  );
}
