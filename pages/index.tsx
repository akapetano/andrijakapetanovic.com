import Layout from '../components/shared/Layout/Layout';
import Footer from '../components/shared/Footer/Footer';
import NextHead from '../components/shared/NextHead/NextHead';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import { HomeSection } from '../components/features/home/HomeSection/HomeSection';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';

const SITE_TITLE = 'Andrija Kapetanović | Front-End Developer';

export default function Home() {
  return (
    <Layout>
      <NextHead title={SITE_TITLE} />
      <LayoutHeader />
      <LayoutMain home mb="2rem">
        <HomeSection />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
