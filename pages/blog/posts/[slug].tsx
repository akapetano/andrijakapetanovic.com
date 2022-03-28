import Layout from '../../../components/core/Layout/Layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Date from '../../../components/Date';
import { Box, Heading } from '@chakra-ui/react';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Heading
          as="h2"
          lineHeight="1.3"
          fontWeight="600"
          fontSize="2xl"
          letterSpacing="-0.05rem"
        >
          {postData.title}
        </Heading>
        <Box fontSize="md" color="gray.400" mb="1rem">
          <Date dateString={postData.date} />
        </Box>
        <Box
          fontSize="md"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
