import { getSortedPostsData } from "../../lib/posts";
import { IPostData } from "../../lib/posts";
import { BlogSection } from "../../components/features/blog/BlogSection/BlogSection";
import AppLayout from "../../components/shared/AppLayout/AppLayout";

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
    <AppLayout pageTitle="Andrija Kapetanović | Blog">
      <BlogSection allPostsData={allPostsData} />
    </AppLayout>
  );
}
