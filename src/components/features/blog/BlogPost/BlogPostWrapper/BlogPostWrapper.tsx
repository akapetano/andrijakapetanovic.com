"use client";

import { Heading, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { ReadTimeBadge } from "../../ReadTimeBadge/ReadTimeBadge";
import Date from "../Date/Date";
import { IBlogPost } from "@/types/blog";
import { ReactNode } from "react";
import { TableOfContents } from "../TableOfContents/TableOfContents";

interface IBlogPostWrapperProps extends IBlogPost {
  children: ReactNode;
}

export function BlogPostWrapper({
  title,
  publishedOn,
  content,
  children,
  headings,
}: IBlogPostWrapperProps) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box as="article" px={{ base: "1rem", lg: 0 }}>
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
      <TableOfContents headings={headings} mb="1rem" />
      <Box color={textColor} fontSize="md" sx={{ p: { mb: "1rem" } }}>
        {children}
      </Box>
    </Box>
  );
}
