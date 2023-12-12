export type BlogPostCategory = "career" | "tech" | "life";

export interface IBlogPost {
  slug: string;
  title: string;
  abstract: "";
  publishedOn: string;
  category: BlogPostCategory;
}
