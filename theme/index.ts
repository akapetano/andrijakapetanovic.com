import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
};

// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// };

const boxShadow = '0px 0px 4px rgba(0, 0, 0, 0.24)';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        color: mode('gray.700', 'gray.200')(props),
        padding: '0',
        margin: '0',
        fontSize: '1.2rem',
        lineHeight: 1.6,
      },
      a: {
        position: 'relative',
        _link: {
          color: mode('brand.600', 'brand.400')(props),
          textDecoration: 'none',
        },
        _visited: {
          color: mode('brand.600', 'brand.400')(props),
          textDecoration: 'none',
        },
        _hover: {
          color: mode('brand.700', 'brand.500')(props),
          textDecoration: 'underline',
        },
        _active: {
          color: mode('brand.700', 'brand.500')(props),
          textDecoration: 'underline',
        },
      },
    }),
  },
  colors: {
    white: '#fff',
    brand: {
      400: '#74b9ff',
      500: '#3498db',
      600: '#2980b9',
      700: '#0984e3',
    },
    icons: {
      sun: '#FFC312',
      moon: '#FCE570',
    },
  },
  fonts: {
    body: `Roboto Condensed, ${base.fonts?.body}`,
    heading: `Montserrat, ${base.fonts?.heading}`,
  },
  breakpoints,
  boxShadow,
});

export default theme;
