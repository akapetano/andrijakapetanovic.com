import { HomeSection } from "../components/features/home/HomeSection/HomeSection";
import Layout from "../components/shared/Layout/Layout";
import LayoutHeader from "../components/shared/LayoutHeader/LayoutHeader";
import LayoutMain from "../components/shared/LayoutMain/LayoutMain";
import NextHead from "../components/shared/NextHead/NextHead";
import Footer from "../components/shared/Footer/Footer";

export default function Home() {
  return (
    <Layout>
      <NextHead title="Andrija Kapetanović | Front-end Developer | Translator" />
      <LayoutHeader />
      <LayoutMain>
        <HomeSection />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
