import { BlogSection } from "../../../components/features/blog/BlogSection/BlogSection";
import { Metadata } from "next";
import { SITE_DESCRIPTION } from "../../../constants";
import { getBlogPostList } from "@/lib/file";

export const metadata: Metadata = {
  title: "Andrija Kapetanović | Blog",
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: "https://www.andrijakapetanovic.com/api/og?page=Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Blog() {
  const allPostsData = await getBlogPostList();

  return <BlogSection allPostsData={allPostsData} />;
}
