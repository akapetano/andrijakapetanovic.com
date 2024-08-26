import { BlogPostWrapper } from "./BlogPostWrapper/BlogPostWrapper";
import { BlogPostContent } from "./BlogPostContent/BlogPostContent";
import { IBlogPost } from "@/types/blog";

export function BlogPost({ title, publishedOn, content, headings }: IBlogPost) {
  return (
    <BlogPostWrapper
      title={title}
      publishedOn={publishedOn}
      content={content}
      headings={headings}
    >
      <BlogPostContent source={content} />
    </BlogPostWrapper>
  );
}
