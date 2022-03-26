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
        padding: 0,
        margin: 0,
        fontSize: '1.2rem',
        lineHeight: 1.6,
        boxSizing: 'border-box',
      },
      a: {
        _link: {
          color: mode('brand.500', 'brand.400')(props),
        },
        _visited: {
          color: mode('brand.500', 'brand.400')(props),
        },
        _hover: {
          color: mode('brand.600', 'brand.500')(props),
          textDecoration: 'underline',
        },
        _active: {
          color: mode('brand.600', 'brand.500')(props),
          textDecoration: 'underline',
        },
      },
    }),
  },
  colors: {
    white: '#fff',
    brand: {
      50: '#E5F0FD',
      100: '#CCE2FC',
      200: '#B2D4FB',
      300: '#7FB7F8',
      400: '#4C9AF6',
      500: '#0070f3',
      600: '#0064DA',
      700: '#0059C2',
      800: '#004EAA',
      900: '#004391',
    },
    icons: {
      sun: '#ffc32b',
      moon: '#FCE570',
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
    Image: {
      borderRadius: 'full',
    },
  },
  breakpoints,
  boxShadow,
});

export default theme;
