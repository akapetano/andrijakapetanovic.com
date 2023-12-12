import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import { ContactForm } from "../ContactForm/ContactForm";
import { Heading } from "@chakra-ui/react";

export function ContactSection() {
  return (
    <>
      <SectionContainer
        justifyContent="center"
        alignItems="start"
        maxWidth="40rem"
      >
        <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
          Contact
        </Heading>
        <ContactForm />
      </SectionContainer>
    </>
  );
}
