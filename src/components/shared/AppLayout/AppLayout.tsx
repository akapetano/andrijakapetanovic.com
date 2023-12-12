"use client";

import Layout from "./Layout/Layout";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutMain from "./LayoutMain/LayoutMain";
import Footer from "./Footer/Footer";
import AuthorImage from "../../core/AuthorImage/AuthorImage";
import BackToHome from "../BackToHome/BackToHome";
import { usePathname } from "next/navigation";

interface IAppLayout {
  children: JSX.Element;
}

export default function AppLayout({ children }: IAppLayout) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Layout>
      <LayoutHeader />
      <AuthorImage isHome={isHome} />
      <LayoutMain>{children}</LayoutMain>
      {!isHome ? <BackToHome /> : null}
      <Footer />
    </Layout>
  );
}
