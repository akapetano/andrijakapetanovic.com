import AppLayout from "../components/shared/AppLayout/AppLayout";
import { HomeSection } from "../components/features/home/HomeSection/HomeSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović",
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return <HomeSection />;
}
