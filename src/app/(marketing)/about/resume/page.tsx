import AppLayout from "../../../../components/shared/AppLayout/AppLayout";
import { ResumeSection } from "../../../../components/features/about/resume/ResumeSection/ResumeSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Resume",
  description: SITE_DESCRIPTION,
};

export default function Resume() {
  return <ResumeSection />;
}
