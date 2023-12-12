import { CodeSnippet } from "../components/core/CodeSnippet/CodeSnippet";
import { Heading } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" mb={"0.5rem"} {...props} />,
} as MDXComponents;
