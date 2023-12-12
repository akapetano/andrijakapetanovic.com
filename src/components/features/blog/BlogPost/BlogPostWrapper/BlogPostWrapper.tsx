"use client";

import { Heading, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { ReadTimeBadge } from "../../ReadTimeBadge/ReadTimeBadge";
import Date from "../Date/Date";
import { IPostDataWithContent } from "@/lib/posts";
import { ReactNode } from "react";

interface IBlogPostWrapperProps extends IPostDataWithContent {
  children: ReactNode;
}

export function BlogPostWrapper({
  title,
  publishedOn,
  content,
  children,
}: IBlogPostWrapperProps) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <article>
      <Heading
        as="h2"
        lineHeight="1.3"
        fontWeight="600"
        fontSize="2xl"
        letterSpacing="-0.05rem"
        pr={2}
      >
        {title}
      </Heading>
      <Flex align="center" fontSize="md" color={dateColor} mb="1rem">
        <Date dateString={publishedOn} />
        <ReadTimeBadge text={content} ml="1rem" />
      </Flex>
      <Box color={textColor} fontSize="md" sx={{ p: { mb: "1rem" } }}>
        {children}
      </Box>
    </article>
  );
}
