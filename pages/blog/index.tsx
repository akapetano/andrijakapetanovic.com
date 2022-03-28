import Layout from '../../components/core/Layout/Layout';
import NextHead from '../../components/NextHead';
import { Container, Heading } from '@chakra-ui/react';
import BackToHome from '../../components/BackToHome';
import LayoutHeader from '../../components/core/Layout/LayoutHeader';
import { UnorderedList, ListItem, Link, Text } from '@chakra-ui/react';
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../components/Date';
import NextLink from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <NextHead title="Blog" />
      <LayoutHeader />
      <section>
        <Container fontSize="1.2rem" lineHeight="1.5" pt="1px">
          <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
            Blog posts
          </Heading>
          <UnorderedList listStyleType="none" p={0} m={0}>
            {allPostsData.map(({ slug, date, title }) => (
              <ListItem margin="0 0 1.25rem" key={slug}>
                <NextLink passHref href={`blog/posts/${slug}`}>
                  <Link>{title}</Link>
                </NextLink>
                <br />
                <Text fontSize="sm" color="gray.400">
                  <Date dateString={date} />
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      </section>
      <BackToHome />;
    </Layout>
  );
}
