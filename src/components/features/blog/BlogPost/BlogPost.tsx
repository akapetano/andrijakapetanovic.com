"use client";

import { Heading, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { ReadTimeBadge } from "../ReadTimeBadge/ReadTimeBadge";
import Date from "./Date/Date";
import { IPostDataWithContent } from "@/lib/posts";

export function BlogPost({ title, date, contentHtml }: IPostDataWithContent) {
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
        <Date dateString={date} />
        <ReadTimeBadge text={contentHtml} ml="1rem" />
      </Flex>
      <Box
        color={textColor}
        fontSize="md"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        sx={{ p: { mb: "1rem" } }}
      />
    </article>
  );
}
