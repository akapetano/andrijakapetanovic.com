import Layout from '../../components/shared/Layout/Layout';
import LayoutHeader from '../../components/shared/LayoutHeader/LayoutHeader';
import LayoutMain from '../../components/shared/LayoutMain/LayoutMain';
import NextHead from '../../components/shared/NextHead/NextHead';
import { Container, Heading } from '@chakra-ui/react';
import BackToHome from '../../components/shared/BackToHome/BackToHome';
import { UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../components/features/blog/Date/Date';
import Footer from '../../components/shared/Footer/Footer';
import { IPostData } from '../../lib/posts';
import NavLink from '../../components/core/NavLink/NavLink';

export interface IAllPostsData {
  allPostsData: IPostData[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }: IAllPostsData) {
  return (
    <Layout>
      <NextHead title="Blog" />
      <LayoutHeader />
      <LayoutMain>
        <section>
          <Container fontSize="1.2rem" lineHeight="1.5" pt="1px">
            <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
              Blog posts
            </Heading>
            <UnorderedList listStyleType="none" p={0} m={0}>
              {allPostsData.map(({ slug, date, title }) => (
                <ListItem margin="0 0 1.25rem" key={slug}>
                  <NavLink pb={'0.3rem'} to={`blog/posts/${slug}`}>
                    {title}
                  </NavLink>
                  <br />
                  <Text mt={'0.3rem'} fontSize="sm" color="gray.400">
                    <Date dateString={date} />
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Container>
        </section>
        <BackToHome />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
