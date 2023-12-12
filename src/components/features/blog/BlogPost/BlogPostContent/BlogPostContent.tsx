import { MDXRenderer } from "../../../../core/MDXRenderer/MDXRenderer";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface IBlogPostContentProps {
  source: string;
}

export function BlogPostContent({ source }: IBlogPostContentProps) {
  return <MDXRenderer source={source} />;
}
