import { BlogPostWrapper } from "./BlogPostWrapper/BlogPostWrapper";
import { BlogPostContent } from "./BlogPostContent/BlogPostContent";
import { IBlogPost } from "@/types/blog";

export function BlogPost({ title, publishedOn, content }: IBlogPost) {
  return (
    <BlogPostWrapper title={title} publishedOn={publishedOn} content={content}>
      <BlogPostContent source={content} />
    </BlogPostWrapper>
  );
}
