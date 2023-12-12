import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { CodeSnippet } from "../components/core/CodeSnippet/CodeSnippet";
import type { MDXComponents } from "mdx/types";

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  a: (props) => (
    <ChakraLink variant={"slidingUnderline"} as={Link} {...props} />
  ),
} as MDXComponents;
