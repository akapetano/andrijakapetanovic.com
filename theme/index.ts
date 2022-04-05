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

const boxShadow = '0px 0px 4px 0px rgba(0, 0, 0, 0.3)';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        color: mode('gray.700', 'gray.200')(props),
        padding: '0',
        margin: '0',
        fontSize: '1.2rem',
        lineHeight: 1.6,
        minHeight: 'fit-content',
      },
      a: {
        position: 'relative',
        textDecoration: 'none',
        pb: '0.2rem',
        _before: {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '2px',
          borderRadius: '2px',
          backgroundColor: mode('brand.600', 'brand.200')(props),
          bottom: '0',
          left: '0',
          transformOrigin: 'right',
          transform: 'scaleX(0)',
          transition: 'transform .3s ease-in-out',
        },
        _link: {
          color: mode('brand.600', 'brand.300')(props),
          textDecoration: 'none',
        },
        _visited: {
          color: mode('brand.600', 'brand.300')(props),
          textDecoration: 'none',
        },
        _hover: {
          color: mode('brand.700', 'brand.200')(props),
          textDecoration: 'none',
          _before: {
            backgroundColor: mode('brand.700', 'brand.200')(props),
            transformOrigin: 'left',
            transform: 'scaleX(1)',
          },
        },
        _active: {
          color: mode('brand.600', 'brand.200')(props),
          textDecoration: 'none',
        },
      },
    }),
  },
  colors: {
    brand: {
      100: '#81ecec',
      200: '#48dbfb',
      300: '#0abde3',
      400: '#45aaf2',
      500: '#3498db',
      600: '#0984e3',
      700: '#2980b9',
      800: '#1e3799',
      900: '#0c2461',
    },
    accent: {
      100: '#fffa65',
      200: '#fff200',
      300: '#e84118',
      400: '#c23616',
    },
    selected: { color: mode('brand.700', 'brand.500') },
  },
  fonts: {
    body: `Roboto Condensed, ${base.fonts?.body}`,
    heading: `Montserrat, ${base.fonts?.heading}`,
  },
  components: {
    Button: {
      variants: {
        primary: (props: any) => ({
          color: mode('brand.500', 'brand.300')(props),
          _hover: {
            color: mode('gray.100', 'gray.800')(props),
            bg: mode('brand.700', 'brand.200')(props),
            borderColor: mode('brand.700', 'brand.200')(props),
          },
        }),
        secondary: (props: any) => ({
          color: mode('white', 'gray.800')(props),
          bg: mode('accent.300', 'accent.100')(props),
          _hover: {
            bg: mode('accent.400', 'accent.200')(props),
          },
        }),
        secondaryGhost: (props: any) => ({
          border: '2px solid',
          outline: 'none',
          color: mode('accent.300', 'accent.100')(props),
          borderColor: mode('accent.300', 'accent.100')(props),
          _hover: {
            color: mode('white', 'gray.800')(props),
            bg: mode('accent.400', 'accent.200')(props),
            borderColor: mode('accent.400', 'accent.200')(props),
          },
        }),
      },
    },
    ModalCloseButton: {
      variants: {
        closeProject: (props: any) => ({
          bgColor: mode('brand.500', 'brand.300')(props),
          _hover: {
            color: mode('brand.500', 'brand.300')(props),
          },
        }),
      },
    },
  },
  breakpoints,
  boxShadow,
});

export default theme;
