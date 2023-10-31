"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../../theme";
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ChakraProvider theme={theme}>
        <GoogleAnalytics trackPageViews />
        {children}
      </ChakraProvider>
    </AnimatePresence>
  );
}
