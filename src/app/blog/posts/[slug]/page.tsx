import { getAllPostSlugs, getPostData } from "../../../../lib/posts";
import Date from "../../../../components/features/blog/Date/Date";
import { Box, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import { IPostDataWithContent } from "../../../../lib/posts";
import { ReadTimeBadge } from "../../../../components/features/blog/ReadTimeBadge/ReadTimeBadge";
import { SITE_DESCRIPTION } from "../../../../constants";

interface IParams {
  params: { slug: string };
}

export interface IPostData {
  postData: IPostDataWithContent;
}

export async function generateMetadata({ params }: IParams) {
  const postData = await getPostData(params!.slug!);

  return {
    title: postData.title,
    description: SITE_DESCRIPTION,
  };
}

export default async function Post({ params }: IParams) {
  const postData = await getPostData(params!.slug!);
  // return {
  //   props: {
  //     postData,
  //   },
  // };
  // const dateColor = useColorModeValue("gray.500", "gray.400");
  // const textColor = useColorModeValue("gray.600", "gray.300");

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
        {postData.title}
      </Heading>
      <Flex align="center" fontSize="md" color={"gray.500"} mb="1rem">
        <Date dateString={postData.date} />
        <ReadTimeBadge text={postData.contentHtml} ml="1rem" />
      </Flex>
      <Box
        color={"gray.600"}
        fontSize="md"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        sx={{ p: { mb: "1rem" } }}
      />
    </article>
  );
}

// export async function getStaticPaths() {
//   // Return a list of possible value for slugs
//   const paths = getAllPostSlugs();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: IParams) {
//   // Fetch necessary data for the blog post
//   const postData = await getPostData(params!.slug!);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
