"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import theme from "../../../theme";
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ReactNode } from "react";
import ChakraColorModeWrapper from "./ChakraColorModeWrapper/ChakraColorModeWrapper";

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return (
    <ChakraColorModeWrapper>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <GoogleAnalytics trackPageViews />
        {children}
      </AnimatePresence>
    </ChakraColorModeWrapper>
  );
}
