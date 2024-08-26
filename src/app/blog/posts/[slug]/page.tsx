import { SITE_TITLE } from "@/constants";
import { BlogPost } from "../../../../components/features/blog/BlogPost/BlogPost";
import { extractHeadings, loadBlogPost } from "@/lib/file";

interface IParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: IParams) {
  const slug = params.slug;

  const { frontmatter } = await loadBlogPost(slug);
  const { title, abstract } = frontmatter;

  return {
    title: `${title} • ${SITE_TITLE}`,
    description: abstract,
    openGraph: {
      title: `${title} • ${SITE_TITLE}`,
      description: abstract,
      images: [
        {
          url: `https://www.andrijakapetanovic.com/api/og?page=Blog&title=${title}`,
        },
      ],
    },
  };
}

export default async function Post({ params }: IParams) {
  const slug = params.slug;
  const { frontmatter, content } = await loadBlogPost(slug);
  const headings = await extractHeadings(content);
  const { title, publishedOn } = frontmatter;

  return (
    <BlogPost
      slug={slug}
      title={title}
      publishedOn={publishedOn}
      content={content}
      headings={headings}
    />
  );
}
