import Layout from '../../components/shared/Layout/Layout';
import LayoutHeader from '../../components/shared/LayoutHeader/LayoutHeader';
import LayoutMain from '../../components/shared/LayoutMain/LayoutMain';
import NextHead from '../../components/shared/NextHead/NextHead';
import { getSortedPostsData } from '../../lib/posts';
import Footer from '../../components/shared/Footer/Footer';
import { IPostData } from '../../lib/posts';
import { BlogSection } from '../../components/features/blog/BlogSection/BlogSection';

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
        <BlogSection allPostsData={allPostsData} />
      </LayoutMain>
      <Footer />
    </Layout>
  );
}
