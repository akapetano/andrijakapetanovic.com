import { getSortedPostsData } from "../../lib/posts";
import { BlogSection } from "../../components/features/blog/BlogSection/BlogSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../constants";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Blog",
  description: SITE_DESCRIPTION,
};

export default async function Blog() {
  const allPostsData = await getSortedPostsData();

  return <BlogSection allPostsData={allPostsData} />;
}
