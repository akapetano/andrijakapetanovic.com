export type BlogPostCategory = "career" | "tech" | "life";

export interface IBlogPost {
  slug?: string;
  title: string;
  abstract?: string;
  content: string;
  publishedOn: string;
  category?: BlogPostCategory;
  headings?: Heading[];
  tableOfContents?: boolean;
}

export type BlogPostSlug =
  | "getting-the-fundamentals-right-introduction"
  | "my-first-post-and-the-journey-so-far";

export interface Heading {
  text: string;
  id: string;
  level: number;
  children?: Heading[];
}
