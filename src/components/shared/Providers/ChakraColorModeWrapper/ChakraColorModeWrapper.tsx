"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../../../../theme";

interface IChakraColorModeWrapper {
  children: ReactNode;
}

export default function ChakraColorModeWrapper({
  children,
}: IChakraColorModeWrapper) {
  return (
    <>
      <ColorModeScript />
      {children}
    </>
  );
}
