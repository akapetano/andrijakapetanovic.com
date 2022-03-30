import '../styles/global.css';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../theme';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
