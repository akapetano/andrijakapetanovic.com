import "../styles/global.css";
import { AppProps } from "next/app";
import Providers from "../components/shared/Providers/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
