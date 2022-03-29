import Layout from '../components/shared/Layout/Layout';
import Footer from '../components/shared/Footer/Footer';
import NextHead from '../components/shared/NextHead/NextHead';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import HomeIntro from '../components/features/home/HomeIntro/HomeIntro';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';

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
