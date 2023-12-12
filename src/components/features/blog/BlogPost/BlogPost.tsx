import { BlogPostWrapper } from "./BlogPostWrapper/BlogPostWrapper";
import { BlogPostContent } from "./BlogPostContent/BlogPostContent";
import { IPostDataWithContent } from "@/lib/posts";

export function BlogPost({
  title,
  publishedOn,
  content,
}: IPostDataWithContent) {
  return (
    <BlogPostWrapper title={title} publishedOn={publishedOn} content={content}>
      <BlogPostContent source={content} />
    </BlogPostWrapper>
  );
}
