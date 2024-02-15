import AppLayout from "../components/shared/AppLayout/AppLayout";
import { HomeSection } from "../components/features/home/HomeSection/HomeSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE } from "../constants";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeSection />;
}
