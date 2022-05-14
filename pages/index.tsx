import Layout from '../components/shared/Layout/Layout';
import Footer from '../components/shared/Footer/Footer';
import NextHead from '../components/shared/NextHead/NextHead';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import { HomeSection } from '../components/features/home/HomeSection/HomeSection';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';

export default function Home() {
  return (
    <Layout>
      <NextHead title="Andrija Kapetanović | Front-End Developer | Translator" />
      <LayoutHeader />
      <LayoutMain home>
        <HomeSection />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
