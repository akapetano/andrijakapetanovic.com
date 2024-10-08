"use client";

import {
  Heading,
  Flex,
  Box,
  useColorModeValue,
  PopoverBody,
  PopoverHeader,
} from "@chakra-ui/react";
import { ReadTimeBadge } from "../../ReadTimeBadge/ReadTimeBadge";
import Date from "../Date/Date";
import { IBlogPost } from "@/types/blog";
import { ReactNode } from "react";
import { TableOfContents } from "../TableOfContents/TableOfContents";
import { Tablets } from "../TableOfContents/Tablets";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";

interface IBlogPostWrapperProps extends IBlogPost {
  children: ReactNode;
}

export function BlogPostWrapper({
  title,
  publishedOn,
  content,
  children,
  headings,
  tableOfContents,
}: IBlogPostWrapperProps) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box as="article" px={{ base: "1rem", lg: 0 }} pr={{ base: "3rem", lg: 0 }}>
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
        <ReadTimeBadge text={content} ml="0.5rem" />
      </Flex>
      {tableOfContents ? (
        <Box
          position="fixed"
          top={"calc(50% - 9rem)"}
          right={{ base: "1.2rem", "2xl": "2rem" }}
          zIndex={9999}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Tablets headings={headings} />
            </PopoverTrigger>
            <PopoverContent
              position="fixed"
              top={"calc(50% - 18rem)"}
              right={{ base: "3.2rem", "2xl": "4rem" }}
              boxShadow="lg"
              isolation="isolate"
            >
              <PopoverHeader
                pt="3"
                fontWeight="semibold"
                sx={{
                  _dark: { color: "gray.300" },
                  _light: { color: "gray.600" },
                }}
              >
                Table of Contents
              </PopoverHeader>
              <PopoverBody>
                <TableOfContents display="block" headings={headings} />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      ) : null}
      <Box color={textColor} fontSize="md" sx={{ p: { mb: "1rem" } }}>
        {children}
      </Box>
    </Box>
  );
}
