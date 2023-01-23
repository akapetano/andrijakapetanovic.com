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
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  message: string;
}

const schema = zod.object({
  firstName: zod.string().min(4),
  lastName: zod.string().min(2),
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
  const onSubmit = async (values) => {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(values),
    });

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
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            justifyContent={"center"}
            alignItems={"start"}
            flexDir={"column"}
            gap="1.5rem"
          >
            <FormControl isInvalid={errors.firstName}>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                id="firstName"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.lastName}>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last Name"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Minimum length should be 2",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.title}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                placeholder="Title"
                {...register("title", {
                  required: "Title is required",
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
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
              Submit
            </Button>
          </Flex>
        </form>
      </Card>
    </Box>
  );
}
