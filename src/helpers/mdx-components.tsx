import type { MDXComponents } from "mdx/types";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { CodeSnippet } from "../components/core/CodeSnippet/CodeSnippet";
import { Heading } from "@chakra-ui/react";
import HouseDemo from "../components/features/blog/HouseDemo/HouseDemo";

interface ComponentsMap extends MDXComponents {
  HouseDemo: typeof HouseDemo;
}

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" mb={"0.5rem"} {...props} />,
  h4: (props) => <Heading as="h4" size="sm" mb={"0.5rem"} {...props} />,
  h5: (props) => <Heading as="h5" size="xs" mb={"0.5rem"} {...props} />,
  h6: (props) => <Heading as="h6" size="xs" mb={"0.5rem"} {...props} />,
  a: (props) => (
    <ChakraLink variant={"slidingUnderline"} as={Link} {...props} />
  ),
  HouseDemo,
} as ComponentsMap;
