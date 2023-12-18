"use client";

import { Heading } from "@chakra-ui/react";
import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import {
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Date from "../BlogPost/Date/Date";
import NavLink from "../../../core/NavLink/NavLink";
import { IBlogPost } from "@/types/blog";
import { Card } from "../../../core/Card/Card";
import Link from "next/link";
import { motion } from "framer-motion";

export interface IAllPostsData {
  allPostsData: IBlogPost[];
}

export function BlogSection({ allPostsData }: IAllPostsData) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const titleHoverColor = useColorModeValue("brand.600", "brand.300");

  return (
    <SectionContainer>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
        Blog posts
      </Heading>
      <UnorderedList
        listStyleType="none"
        p={0}
        m={0}
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gridAutoRows="1fr"
        gap={{ base: 0, md: 5 }}
      >
        {allPostsData?.map(({ slug, publishedOn, abstract, title }) => (
          <ChakraLink
            key={slug}
            as={Link}
            href={`blog/posts/${slug}`}
            variant="noUnderline"
            height={"auto"}
          >
            <ListItem className="blog-post-list-item" margin="0 0 1.25rem">
              <Card>
                <Heading
                  as={"h3"}
                  fontWeight="semibold"
                  fontSize="lg"
                  pb={"1rem"}
                  color={textColor}
                  sx={{
                    ".blog-post-list-item: hover &": {
                      color: titleHoverColor,
                    },
                  }}
                >
                  {title}
                </Heading>
                {abstract && (
                  <Text fontSize="md" color={textColor}>
                    {abstract}
                  </Text>
                )}
                {publishedOn && (
                  <Text fontSize="sm" color={dateColor}>
                    <Date dateString={publishedOn} />
                  </Text>
                )}
              </Card>
            </ListItem>
          </ChakraLink>
        ))}
      </UnorderedList>
    </SectionContainer>
  );
}
