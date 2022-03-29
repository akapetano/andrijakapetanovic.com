import Layout from '../../../components/core/Layout/Layout';
import LayoutHeader from '../../../components/core/Layout/LayoutHeader';
import LayoutMain from '../../../components/core/Layout/LayoutMain';
import { getAllPostSlugs, getPostData } from '../../../lib/posts';
import NextHead from '../../../components/NextHead';
import Date from '../../../components/Date';
import { Box, Heading } from '@chakra-ui/react';
import Footer from '../../../components/Footer';

export default function Post({ postData }) {
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

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
