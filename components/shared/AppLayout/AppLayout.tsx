"use client";

import Layout from "./Layout/Layout";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutMain from "./LayoutMain/LayoutMain";
import NextHead from "./NextHead/NextHead";
import Footer from "./Footer/Footer";
import AuthorImage from "../../core/AuthorImage/AuthorImage";
import BackToHome from "../BackToHome/BackToHome";
import { useRouter } from "next/router";

interface IAppLayout {
  children: JSX.Element;
  pageTitle: string;
}

export default function AppLayout({ children, pageTitle }: IAppLayout) {
  const { pathname } = useRouter();
  const isHome = pathname === "/";

  return (
    <Layout>
      <NextHead title={pageTitle} />
      <LayoutHeader />
      <AuthorImage home={isHome} />
      <LayoutMain>{children}</LayoutMain>
      {!isHome ? <BackToHome /> : null}
      <Footer />
    </Layout>
  );
}
