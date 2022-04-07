import Layout from '../../components/shared/Layout/Layout';
import LayoutHeader from '../../components/shared/LayoutHeader/LayoutHeader';
import LayoutMain from '../../components/shared/LayoutMain/LayoutMain';
import NextHead from '../../components/shared/NextHead/NextHead';
import Footer from '../../components/shared/Footer/Footer';
import { ResumeSection } from '../../components/features/about/ResumeSection/ResumeSection';

export default function Resume() {
  return (
    <Layout>
      <NextHead title="Resume" />
      <LayoutHeader />
      <LayoutMain>
        <ResumeSection />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
