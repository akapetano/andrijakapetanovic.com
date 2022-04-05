import Layout from '../components/shared/Layout/Layout';
import NextHead from '../components/shared/NextHead/NextHead';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import BackToHome from '../components/shared/BackToHome/BackToHome';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';
import Footer from '../components/shared/Footer/Footer';
import { AboutSection } from '../components/features/about/AboutSection/AboutSection';

export default function About() {
  return (
    <Layout>
      <NextHead title="About" />
      <LayoutHeader />
      <LayoutMain>
        <AboutSection />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
