import { MDXRenderer } from "../../../../core/MDXRenderer/MDXRenderer";

interface IBlogPostContentProps {
  source: string;
}

export function BlogPostContent({ source }: IBlogPostContentProps) {
  return <MDXRenderer source={source} />;
}
