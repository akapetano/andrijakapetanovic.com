"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "../../../theme";
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ReactNode } from "react";
import { ColorModeScript } from "@chakra-ui/react";

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <GoogleAnalytics trackPageViews />
          {children}
        </AnimatePresence>
      </ChakraProvider>
    </CacheProvider>
  );
}
