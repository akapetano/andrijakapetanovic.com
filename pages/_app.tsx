import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ChakraProvider theme={theme}>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}
