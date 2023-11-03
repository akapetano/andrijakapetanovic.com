"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Textarea,
  Text,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { Card } from "../../../core/Card/Card";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { useContactForm } from "../../../../../hooks/useContactForm";

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be 2 or more characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be 2 or more characters long" }),
  email: z.string().email({ message: "Email address must be valid" }).min(2),
  subject: z
    .string()
    .min(4, { message: "Subject must be 4 or more characters long" }),
  message: z
    .string()
    .min(4, { message: "Message must be 4 or more characters long" }),
  token: z.string().optional(),
});

export type ContactFormData = z.infer<typeof schema>;

export function ContactForm() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const { sendContactForm } = useContactForm();

  const onSubmit = async (data: ContactFormData) => {
    await sendContactForm(data, reset);
  };

  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      mb={{ base: "0rem", md: "5rem" }}
    >
      <Text fontSize={"md"} mb="1.5rem">
        Thanks for visiting my website. If you&apos;re interested in working
        together or have any questions, please feel free to contact me by using
        the form below or emailing me at{" "}
        <Link
          href="to:andrija.kapetanovic@gmail.com"
          variant="withoutUnderline"
        >
          andrija.kapetanovic@gmail.com
        </Link>
        . I look forward to hearing from you!
      </Text>
      <Card pt="1.5rem" w="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            justifyContent={"center"}
            alignItems={"end"}
            flexDir={"column"}
            gap="1.5rem"
          >
            <FormControl
              variant={"floating"}
              isInvalid={Boolean(errors?.firstName)}
            >
              <Input
                id="firstName"
                {...register("firstName")}
                isDisabled={isSubmitting}
                placeholder=" "
              />
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <FormErrorMessage>
                {errors?.firstName && errors?.firstName?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isInvalid={Boolean(errors?.lastName)}
            >
              <Input
                id="lastName"
                {...register("lastName")}
                isDisabled={isSubmitting}
                placeholder=" "
              />
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <FormErrorMessage>
                {errors?.lastName && errors?.lastName?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isInvalid={Boolean(errors?.email)}
            >
              <Input
                id="email"
                {...register("email")}
                isDisabled={isSubmitting}
                placeholder=" "
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormErrorMessage>
                {errors?.email && errors?.email?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isInvalid={Boolean(errors?.subject)}
            >
              <Input
                id="subject"
                {...register("subject")}
                isDisabled={isSubmitting}
                placeholder=" "
              />
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormErrorMessage>
                {errors?.subject && errors?.subject?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isInvalid={Boolean(errors?.message)}
            >
              <Textarea
                id="message"
                {...register("message")}
                isDisabled={isSubmitting}
                placeholder=" "
              />
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormErrorMessage>
                {errors?.message && errors?.message?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            {/* <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              size="invisible"
              ref={recaptchaRef}
              hl="en"
            /> */}
            <Button
              w={{ base: "100%", md: "auto" }}
              mt={2}
              mb={4}
              variant="primary"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? <Spinner mx="2.5rem" /> : "Send Message"}
            </Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
}
