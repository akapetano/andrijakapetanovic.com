import Layout from '../components/core/Layout/Layout';
import Footer from '../components/Footer';
import NextHead from '../components/NextHead';
import LayoutHeader from '../components/core/Layout/LayoutHeader';
import HomeIntro from '../components/HomeIntro';
import LayoutMain from '../components/core/Layout/LayoutMain';

const SITE_TITLE = 'Andrija Kapetanović | Front-End Developer';

export default function Home() {
  return (
    <Layout>
      <NextHead title={SITE_TITLE} />
      <LayoutHeader />
      <LayoutMain home>
        <HomeIntro />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
