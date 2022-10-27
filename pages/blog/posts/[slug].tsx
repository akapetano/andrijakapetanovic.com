import Layout from "../../../components/shared/Layout/Layout";
import LayoutHeader from "../../../components/shared/LayoutHeader/LayoutHeader";
import LayoutMain from "../../../components/shared/LayoutMain/LayoutMain";
import { getAllPostSlugs, getPostData } from "../../../lib/posts";
import NextHead from "../../../components/shared/NextHead/NextHead";
import Date from "../../../components/features/blog/Date/Date";
import { Box, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import Footer from "../../../components/shared/Footer/Footer";
import { IPostDataWithContent } from "../../../lib/posts";
import { ReadTimeBadge } from "../../../components/features/blog/ReadTimeBadge/ReadTimeBadge";

interface IParams {
  params: { slug: string };
}

interface IPostData {
  postData: IPostDataWithContent;
}

export default function Post({ postData }: IPostData) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Layout>
      <NextHead title={postData.title} />
      <LayoutHeader />
      <LayoutMain>
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
          <Flex align="center" fontSize="md" color={dateColor} mb="1rem">
            <Date dateString={postData.date} />
            <ReadTimeBadge text={postData.contentHtml} ml="1rem" />
          </Flex>
          <Box
            color={textColor}
            fontSize="md"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            sx={{ p: { mb: "1rem" } }}
          />
        </article>
      </LayoutMain>
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for slugs
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: IParams) {
  // Fetch necessary data for the blog post
  const postData = await getPostData(params!.slug!);
  return {
    props: {
      postData,
    },
  };
}
