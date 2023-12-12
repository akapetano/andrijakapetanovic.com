import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { cache } from "react";
import { IBlogPost } from "@/types/blog";

export function sortBlogPosts(blogPosts: Array<IBlogPost>) {
  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function getBlogPostList() {
  const fileNames = await readDirectory("/content");

  const blogPosts: IBlogPost[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    } as IBlogPost);
  }

  const sortedBlogPosts = sortBlogPosts(blogPosts);

  return sortedBlogPosts;
}

export const loadBlogPost = cache(async function loadBlogPost(slug: string) {
  const blogPosts = await getBlogPostList();

  const blogPostExists = blogPosts.some((post) => post.slug === slug);

  if (!blogPostExists) {
    notFound();
  }

  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}
