import AppLayout from "../../components/shared/AppLayout/AppLayout";
import { ContactSection } from "../../components/features/contact/ContactSection/ContactSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Contact",
  description: SITE_DESCRIPTION,
};

export default function Portfolio() {
  return <ContactSection />;
}
