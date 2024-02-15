import { PortfolioSection } from "../../../components/features/portfolio/PortfolioSection/PortfolioSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Portfolio",
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Portfolio() {
  return <PortfolioSection />;
}
