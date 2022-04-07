import Layout from '../components/shared/Layout/Layout';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';
import NextHead from '../components/shared/NextHead/NextHead';
import Footer from '../components/shared/Footer/Footer';

import { PortfolioSection } from '../components/features/portfolio/PortfolioSection/PortfolioSection';

export default function Portfolio() {
  return (
    <Layout>
      <NextHead title="Portfolio" />
      <LayoutHeader />
      <LayoutMain>
        <PortfolioSection />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
