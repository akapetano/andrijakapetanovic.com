import AppLayout from "../../../components/shared/AppLayout/AppLayout";
import { ResumeSection } from "../../../components/features/about/resume/ResumeSection/ResumeSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Resume",
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=Resume",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Resume() {
  return <ResumeSection />;
}
