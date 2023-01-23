import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Textarea,
  Text,
  Link,
} from "@chakra-ui/react";
import { Card } from "../../../core/Card/Card";

interface IContactFormValues {
  name: string;
  email: string;
  title: string;
  message: string;
}

const schema = zod.object({
  name: zod.string().min(4),
  email: zod.string().email().min(2),
  title: zod.string().min(4),
  message: zod.string().min(4),
});

export function ContactForm() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data: any) => {
    // await fetch("/api/form", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    console.log(data);

    reset();
  };

  return (
    <Box w="100%">
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
      <Card pt="1.5rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            justifyContent={"center"}
            alignItems={"start"}
            flexDir={"column"}
            gap="1.5rem"
          >
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.name)}
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors?.name && errors?.name?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.email)}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <FormErrorMessage>
                {errors?.email && errors?.email?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.title)}
            >
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                {...register("title", {
                  required: "Title is required",
                })}
              />
              <FormErrorMessage>
                {errors?.title && errors?.title?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              variant={"floating"}
              isDisabled={Boolean(errors?.message)}
              id="message"
            >
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
              />
              <FormErrorMessage>
                {errors?.message && errors?.message?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <Button
              w={{ base: "100%", md: "auto" }}
              mt={2}
              mb={4}
              variant="primary"
              isLoading={isSubmitting}
              type="submit"
            >
              Send Message
            </Button>
          </Flex>
        </form>
      </Card>
    </Box>
  );
}
