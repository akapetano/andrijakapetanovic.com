import type { MDXComponents } from "mdx/types";
import {
  Link as ChakraLink,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  HeadingProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { CodeSnippet } from "../components/core/CodeSnippet/CodeSnippet";
import HouseDemo from "../components/features/blog/HouseDemo/HouseDemo";
import BoxModelDemo from "../components/features/blog/BoxModelDemo/BoxModelDemo";
import ColorsDemo from "../components/features/blog/ColorsDemo/ColorsDemo";
import { escapeText } from "@/lib/file";

//@ts-ignore
interface ComponentsMap extends MDXComponents {
  HouseDemo: typeof HouseDemo;
  BoxModelDemo: typeof BoxModelDemo;
  ColorsDemo: typeof ColorsDemo;
}

const MdxHeading = (props: HeadingProps) => {
  const { children } = props;
  const id = children?.toString().replace(/ /g, "-").toLowerCase() ?? "";
  const escapedId = escapeText(id);

  return (
    <Heading id={escapedId} paddingTop="90px" marginTop="-90px" {...props} />
  );
};

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  h1: (props) => <MdxHeading as="h1" size="xl" {...props} />,
  h2: (props) => <MdxHeading as="h2" size="lg" {...props} />,
  h3: (props) => <MdxHeading as="h3" size="md" mb={"0.5rem"} {...props} />,
  h4: (props) => <MdxHeading as="h4" size="sm" mb={"0.5rem"} {...props} />,
  h5: (props) => <MdxHeading as="h5" size="xs" mb={"0.5rem"} {...props} />,
  h6: (props) => <MdxHeading as="h6" size="xs" mb={"0.5rem"} {...props} />,
  a: (props) => (
    <ChakraLink variant={"slidingUnderline"} as={Link} {...props} />
  ),
  ul: (props) => (
    <UnorderedList ml="2rem" mt="-0.5rem" mb="0.5rem" {...props} />
  ),
  ol: (props) => <OrderedList ml="2rem" mt="-0.5rem" mb="0.5rem" {...props} />,
  li: (props) => <ListItem {...props} />,
  HouseDemo,
  BoxModelDemo,
  ColorsDemo,
} as ComponentsMap;
