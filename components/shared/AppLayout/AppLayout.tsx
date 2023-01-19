import Layout from "./Layout/Layout";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutMain from "./LayoutMain/LayoutMain";
import NextHead from "./NextHead/NextHead";
import Footer from "./Footer/Footer";
import { usePathname } from "next/navigation";
import AuthorImage from "../../core/AuthorImage/AuthorImage";
import BackToHome from "../BackToHome/BackToHome";

interface IAppLayout {
  children: JSX.Element;
  pageTitle: string;
}

export default function AppLayout({ children, pageTitle }: IAppLayout) {
  const pathname = usePathname();
  const isHome = !pathname;

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
