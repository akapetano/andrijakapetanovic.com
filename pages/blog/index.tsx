import Layout from '../../components/core/Layout/Layout';
import NextHead from '../../components/NextHead';
import { Container, Heading } from '@chakra-ui/react';
import BackToHome from '../../components/BackToHome';
import { BlogPostsList } from '../../components/features/blog/BlogPostsList';
import LayoutHeader from '../../components/core/Layout/LayoutHeader';

export default function Blog() {
  return (
    <Layout>
      <NextHead title="Blog" />
      <LayoutHeader />
      <section>
        <Container fontSize="1.2rem" lineHeight="1.5" pt="1px">
          <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
            Blog posts
          </Heading>
          <BlogPostsList />
        </Container>
      </section>
      <BackToHome />;
    </Layout>
  );
}
