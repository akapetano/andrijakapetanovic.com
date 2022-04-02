import Layout from '../components/shared/Layout/Layout';
import LayoutHeader from '../components/shared/LayoutHeader/LayoutHeader';
import LayoutMain from '../components/shared/LayoutMain/LayoutMain';
import NextHead from '../components/shared/NextHead/NextHead';
import BackToHome from '../components/shared/BackToHome/BackToHome';
import Footer from '../components/shared/Footer/Footer';
import { PortfolioIntro } from '../components/features/portfolio/PortfolioIntro/PortfolioIntro';
import { ProjectGrid } from '../components/features/portfolio/ProjectsGrid/ProjectGrid';

export default function Portfolio() {
  return (
    <Layout>
      <NextHead title="Portfolio" />
      <LayoutHeader />
      <LayoutMain>
        <PortfolioIntro />
        <ProjectGrid />
      </LayoutMain>
      <BackToHome />
      <Footer />
    </Layout>
  );
}
