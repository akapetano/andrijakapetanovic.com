import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';
import NextLink from 'next/link';
import Head from 'next/head';
import Date from '../../components/Date';
import {
  Container,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Text,
} from '@chakra-ui/react';
import BackToHome from '../../components/BackToHome';

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
      <Head>
        <title>Blog</title>
      </Head>
      <section>
        <Container fontSize="1.2rem" lineHeight="1.5" pt="1px">
          <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
            Blog posts
          </Heading>
          <UnorderedList listStyleType="none" p={0} m={0}>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem margin="0 0 1.25rem" key={id}>
                <NextLink passHref href={`blog/posts/${id}`}>
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
