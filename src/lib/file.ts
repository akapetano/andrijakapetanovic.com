import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { cache } from "react";
import { IBlogPost } from "@/types/blog";
import { remark } from "remark";
import remarkSlug, { Root } from "remark-slug";
import { visit } from "unist-util-visit";
import { Node } from "unist";
import { Heading } from "@/types/blog";

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

export function nestHeadings(headings: Heading[]): Heading[] {
  return headings.reduce((acc: Heading[], heading) => {
    // Start with the base level, where 0 is the root level for top-level headings
    let currentLevel = acc;

    // Traverse the stack to find the correct parent for the current heading
    for (let i = 0; i < heading.level - 3; i++) {
      if (currentLevel.length === 0) break;
      currentLevel = currentLevel[currentLevel.length - 1].children || [];
    }

    // Add the heading as a child to the current level
    currentLevel.push({ ...heading, children: [] });

    return acc;
  }, []);
}

export function escapeText(text: string): string {
  // Escape symbols that might cause issues in IDs or links
  return text
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/"/g, "")
    .replace(/'/g, "");
}

export async function extractHeadings(content: string) {
  const headings: Heading[] = [];

  await remark()
    .use(remarkSlug)
    .use(() => (tree: Root) => {
      visit(tree, "heading", (node) => {
        const text = node.children
          .filter(
            (child: Node) =>
              child.type === "text" || child.type === "mdxTextExpression"
          )
          .map((child: Node) => (child as any).value)
          .join("");
        const id = (node.data as any).id;
        const escapedText = escapeText(text);

        headings.push({ text: escapedText, id, level: node.depth });
      });
    })
    .process(content);

  const nestedHeadings = nestHeadings(headings);

  return nestedHeadings;
}

function readFile(localPath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}
