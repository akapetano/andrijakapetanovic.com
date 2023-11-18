import { getPostData } from "../../../../lib/posts";
import { IPostDataWithContent } from "../../../../lib/posts";
import { SITE_DESCRIPTION } from "../../../../constants";
import { BlogPost } from "../../../../components/features/blog/BlogPost/BlogPost";

interface IParams {
  params: { slug: string };
}

export interface IPostData {
  postData: IPostDataWithContent;
}

export async function generateMetadata({ params }: IParams) {
  const postData = await getPostData(params!.slug!);

  return {
    title: postData.title,
    description: SITE_DESCRIPTION,
  };
}

export default async function Post({ params }: IParams) {
  const { title, date, contentHtml, slug } = await getPostData(params!.slug!);

  return (
    <BlogPost slug={slug} title={title} date={date} contentHtml={contentHtml} />
  );
}
