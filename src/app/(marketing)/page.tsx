import AppLayout from "../../components/shared/AppLayout/AppLayout";
import { HomeSection } from "../../components/features/home/HomeSection/HomeSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE } from "../../constants";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return <HomeSection />;
}
