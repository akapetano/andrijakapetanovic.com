import { useToast } from "@chakra-ui/react";
import { ContactFormData } from "../components/features/contact/ContactForm/ContactForm";
import { UseFormReset } from "react-hook-form";

export const useContactForm = () => {
  const toast = useToast({
    containerStyle: {
      fontSize: "sm",
    },
  });

  async function sendContactForm(
    data: ContactFormData,
    reset: UseFormReset<ContactFormData>
  ) {
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }
      if (response.status === 200) {
        toast({
          title: "Your message has been successfully sent.",
          description:
            "Thank you for contacting me. I will get back to you as soon as possible.",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
      }
      reset();
      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error!",
          description: error?.message
            ? error?.message
            : "Something went wrong!",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      }
    }
  }

  return { sendContactForm };
};
