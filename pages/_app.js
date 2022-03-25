import '../styles/global.css';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
