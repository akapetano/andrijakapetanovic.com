"use client";

import { ColorModeScript } from "@chakra-ui/react";
import { ReactNode } from "react";

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
