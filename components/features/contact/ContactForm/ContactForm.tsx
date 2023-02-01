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
  useToast,
} from "@chakra-ui/react";
import { Card } from "../../../core/Card/Card";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

const schema = z.object({
  name: z.string().min(4),
  email: z.string().email().min(2),
  title: z.string().min(4),
  message: z.string().min(4),
  token: z.string(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    const token = await recaptchaRef?.current?.executeAsync();
    recaptchaRef?.current?.reset();
    data["token"] = token || "";
    const requestConfig = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await fetch("/api/form", requestConfig);
      if (response.status === 200) {
        toast({
          title: "Message sent.",
          description:
            "Thank you for contacting me. I will get back to you as soon as possible.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        reset();
      }
    } catch (error) {
      toast({
        title: error.response.data.message,
        description: error.response.statusText,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);

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
              isDisabled={Boolean(errors?.name)}
            >
              <Input
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                placeholder=" "
              />
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormErrorMessage>
                {errors?.name && errors?.name?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.email)}
            >
              <Input
                id="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder=" "
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormErrorMessage>
                {errors?.email && errors?.email?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.title)}
            >
              <Input
                id="title"
                {...register("title", {
                  required: "Title is required",
                })}
                placeholder=" "
              />
              <FormLabel htmlFor="title">Title</FormLabel>
              <FormErrorMessage>
                {errors?.title && errors?.title?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.message)}
              id="message"
            >
              <Textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
                placeholder=" "
              />
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormErrorMessage>
                {errors?.message && errors?.message?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              size="invisible"
              ref={recaptchaRef}
              hl="en"
            />
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
