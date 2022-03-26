import Layout from '../../../components/Layout';
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
          size="lg"
          lineHeight="1.3"
          fontWeight="800"
          letterSpacing="-0.05rem"
          margin="1rem 0"
        >
          {postData.title}
        </Heading>
        <Box color="gray.400">
          <Date dateString={postData.date} />
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
