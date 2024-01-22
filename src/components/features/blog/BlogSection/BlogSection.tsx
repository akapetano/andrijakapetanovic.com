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
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Date from "../BlogPost/Date/Date";
import { IBlogPost } from "@/types/blog";
import { Card } from "../../../core/Card/Card";
import Link from "next/link";

export interface IAllPostsData {
  allPostsData: IBlogPost[];
}

export function BlogSection({ allPostsData }: IAllPostsData) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const titleHoverColor = useColorModeValue("brand.600", "brand.300");
  const linkHoverColor = useColorModeValue("brand.700", "brand.200");

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
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gridAutoRows="1fr"
        gap={{ base: 0, md: 5 }}
      >
        {allPostsData?.map(({ slug, publishedOn, abstract, title }) => {
          const articlePath = `blog/posts/${slug}`;

          return (
            <ListItem
              key={slug}
              className="blog-post-list-item"
              margin="0 0 1.25rem"
              display={{ base: "block", md: "flex" }}
            >
              <Card display={"flex"} flexDirection="column">
                <ChakraLink
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  gap="0.2rem"
                  mt="0.5rem"
                  as={Link}
                  href={articlePath}
                  variant="noUnderline"
                >
                  <Heading
                    as={"h3"}
                    fontWeight="semibold"
                    fontSize="lg"
                    mb={"1rem"}
                    color={textColor}
                    sx={{
                      ".blog-post-list-item: hover &": {
                        color: titleHoverColor,
                      },
                    }}
                  >
                    {title}
                  </Heading>
                </ChakraLink>
                {abstract && (
                  <Text fontSize="md" color={textColor}>
                    {abstract}
                  </Text>
                )}
                {publishedOn && (
                  <Text
                    fontSize="sm"
                    color={dateColor}
                    flexGrow={{ base: "", md: 1 }}
                  >
                    <Date dateString={publishedOn} />
                  </Text>
                )}
                <ChakraLink
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  gap="0.2rem"
                  py="0.5rem"
                  className="read-article-button"
                  as={Link}
                  href={articlePath}
                  variant="noUnderline"
                  _hover={{ color: linkHoverColor }}
                >
                  Read article
                  <ArrowForwardIcon
                    transition="transform .3s ease-in-out"
                    sx={{
                      ".read-article-button: hover &": {
                        transform: "translateX(30%) scale(1.1)",
                      },
                    }}
                  />
                </ChakraLink>
              </Card>
            </ListItem>
          );
        })}
      </UnorderedList>
    </SectionContainer>
  );
}
