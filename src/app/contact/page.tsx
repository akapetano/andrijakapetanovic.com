import AppLayout from "../../components/shared/AppLayout/AppLayout";
import { ContactSection } from "../../components/features/contact/ContactSection/ContactSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Contact",
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=Contact",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=Contact",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Portfolio() {
  return <ContactSection />;
}
