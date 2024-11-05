"use client";

import { Heading } from "@chakra-ui/react";
import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import { UnorderedList } from "@chakra-ui/react";
import { IBlogPost } from "@/types/blog";
import { BlogPostCard } from "./BlogPostCard";

export interface IAllPostsData {
  allPostsData: IBlogPost[];
}

export function BlogSection({ allPostsData }: IAllPostsData) {
  return (
    <SectionContainer maxWidth="none">
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
        Blog posts
      </Heading>
      <UnorderedList
        listStyleType="none"
        p={0}
        m={0}
        display={"grid"}
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gridAutoRows={{ base: "", md: "1fr" }}
        gap={5}
      >
        {allPostsData?.map(({ slug, publishedOn, abstract, title }) => {
          return (
            <BlogPostCard
              key={slug}
              slug={slug}
              publishedOn={publishedOn}
              abstract={abstract}
              title={title}
            />
          );
        })}
      </UnorderedList>
    </SectionContainer>
  );
}
