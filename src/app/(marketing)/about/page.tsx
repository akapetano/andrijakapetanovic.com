import { Metadata } from "next";
import { AboutSection } from "../../../components/features/about/AboutSection/AboutSection";
import AppLayout from "../../../components/shared/AppLayout/AppLayout";
import { SITE_DESCRIPTION } from "../../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | About",
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=About",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function About() {
  return <AboutSection />;
}
