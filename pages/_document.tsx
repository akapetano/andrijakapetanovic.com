import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Layout from "../components/shared/Layout/Layout";
import LayoutHeader from "../components/shared/LayoutHeader/LayoutHeader";
import LayoutMain from "../components/shared/LayoutMain/LayoutMain";
import Footer from "../components/shared/Footer/Footer";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript />
        <Layout>
          <LayoutHeader />
          <LayoutMain>
            <Main />
          </LayoutMain>
          <Footer />
        </Layout>
        <NextScript />
      </body>
    </Html>
  );
}
