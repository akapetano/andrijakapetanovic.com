import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENT_MAP } from "../../../helpers/mdx-components";

interface IMDXRendererProps {
  source: string;
}

export function MDXRenderer({ source }: IMDXRendererProps) {
  return <MDXRemote source={source} components={COMPONENT_MAP} />;
}
