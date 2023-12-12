"use client";

import { Heading } from "@chakra-ui/react";
import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import {
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Date from "../BlogPost/Date/Date";
import { IPostData } from "../../../../lib/posts";
import NavLink from "../../../core/NavLink/NavLink";
import { IBlogPost } from "@/types/blog";

export interface IAllPostsData {
  allPostsData: IBlogPost[];
}

export function BlogSection({ allPostsData }: IAllPostsData) {
  const dateColor = useColorModeValue("gray.500", "gray.400");

  return (
    <SectionContainer>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
        Blog posts
      </Heading>
      <UnorderedList listStyleType="none" p={0} m={0}>
        {allPostsData?.map(({ slug, publishedOn, title }) => (
          <ListItem margin="0 0 1.25rem" key={slug}>
            <NavLink pb={"0.3rem"} to={`blog/posts/${slug}`}>
              {title}
            </NavLink>
            <br />
            <Text fontSize="sm" color={dateColor}>
              <Date dateString={publishedOn} />
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </SectionContainer>
  );
}
