import { Metadata } from "next";
import { AboutSection } from "../../components/features/about/AboutSection/AboutSection";
import AppLayout from "../../components/shared/AppLayout/AppLayout";
import { SITE_DESCRIPTION } from "../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | About",
  description: SITE_DESCRIPTION,
};

export default function About() {
  return <AboutSection />;
}
