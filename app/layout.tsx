import Layout from "../components/shared/Layout/Layout";
import LayoutHeader from "../components/shared/LayoutHeader/LayoutHeader";
import LayoutMain from "../components/shared/LayoutMain/LayoutMain";
import NextHead from "../components/shared/NextHead/NextHead";
import Footer from "../components/shared/Footer/Footer";
import { Montserrat } from "@next/font/google";
import { ColorModeScript } from "@chakra-ui/react";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const montserrat = Montserrat();

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className={montserrat.className}>
      <NextHead title="Andrija Kapetanović | Front-End Developer | Translator" />
      <body>
        <ColorModeScript />
        <Layout>
          <LayoutHeader />
          <LayoutMain home>{children}</LayoutMain>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
