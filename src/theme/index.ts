import {
  extendTheme,
  theme as base,
  ThemeConfig,
  defineStyleConfig,
  CSSWithMultiValues,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@/utils/mode";
import { Montserrat, Fira_Code, Hind } from "next/font/google";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
} as const;

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    100: "#81ecec",
    200: "#48dbfb",
    300: "#0abde3",
    400: "#45aaf2",
    500: "#3498db",
    600: "#0984e3",
    700: "#2980b9",
    800: "#1e3799",
    900: "#0c2461",
  },
  accent: {
    100: "#fffa65",
    200: "#fff200",
    300: "#e84118",
    400: "#c23616",
  },
} as const;

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-family-heading",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-family-body",
  display: "swap",
});

const monoFont = Fira_Code({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

const fonts = {
  body: hind.style.fontFamily,
  heading: montserrat.style.fontFamily,
  code: monoFont.style.fontFamily,
} as const;

const styles = {
  global: (props: StyleFunctionProps) => ({
    "html, body": {
      scrollBehavior: "smooth",
      color: mode(props, "gray.200", "gray.700"),
      padding: "0",
      margin: "0",
      fontSize: "1.2rem",
      lineHeight: 1.6,
      minHeight: "fit-content",
    },

    ul: {
      marginLeft: "2rem",
    },
  }),
  ...config,
};

const boxShadow = "0px 0px 4px 0px rgba(0, 0, 0, 0.3)";

const activeLabelStyles = (props: StyleFunctionProps) => ({
  transform: "scale(0.85) translateY(-50px) translateX(-22px) ",
  transition: "transform 0.3s ease-out",
  color: mode(props, "gray.100", "gray.900"),
});

const Card = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps): CSSWithMultiValues => ({
    rounded: "lg",
    p: "1rem",
    boxShadow: mode(
      props,
      "0 0 10px 0 rgba(255, 255, 255, 0.1)",
      "0 0 10px 0 rgba(0, 0, 0, 0.15)"
    ),
  }),
});

const components = {
  Button: {
    variants: {
      primary: (props: StyleFunctionProps) => ({
        color: mode(props, "gray.800", "white"),
        bg: mode(props, "brand.300", "brand.600"),
        _hover: {
          color: mode(props, "gray.700", "gray.50"),
          bg: mode(props, "brand.200", "brand.700"),
          borderColor: mode(props, "brand.200", "brand.700"),
        },
        _disabled: {
          _hover: {
            color: mode(props, "gray.700 !important", "gray.50 !important"),
            bg: mode(props, "brand.200 !important", "brand.700 !important"),
            borderColor: mode(
              props,
              "brand.200 !important",
              "brand.700 !important"
            ),
          },
        },
      }),
      primaryGhost: (props: StyleFunctionProps) => ({
        color: mode(props, "brand.300", "brand.500"),
        border: "2px solid",
        _hover: {
          color: mode(props, "gray.800", "gray.100"),
          bg: mode(props, "brand.200", "brand.700"),
          borderColor: mode(props, "brand.200", "brand.700"),
        },
      }),
      secondary: (props: StyleFunctionProps) => ({
        color: mode(props, "gray.800", "white"),
        bg: mode(props, "accent.100", "accent.300"),
        _hover: {
          bg: mode(props, "accent.200", "accent.400"),
        },
      }),
      secondaryGhost: (props: StyleFunctionProps) => ({
        border: "2px solid",
        outline: "none",
        color: mode(props, "accent.100", "accent.300"),
        borderColor: mode(props, "accent.100", "accent.300"),
        _hover: {
          color: mode(props, "gray.800", "white"),
          bg: mode(props, "accent.200", "accent.400"),
          borderColor: mode(props, "accent.200", "accent.400"),
        },
      }),
      primaryGhostIconButton: (props: StyleFunctionProps) => ({
        color: mode(props, "brand.300", "brand.500"),
        border: "2px solid",
        borderColor: mode(props, "gray.500", "gray.200"),
        _hover: { borderColor: mode(props, "brand.200", "brand.400") },
      }),
    },
  },
  IconButton: {
    baseStyle: (props: StyleFunctionProps) => ({
      border: "2px solid",
      borderColor: mode(props, "gray.500", "gray.200"),
    }),
  },
  Box: {
    variants: {
      card: (props: StyleFunctionProps) => ({
        rounded: "lg",
        p: "1rem",
        boxShadow: mode(
          props,
          "0 0 10px 0 rgba(255, 255, 255, 0.1)",
          "0 0 10px 0 rgba(0, 0, 0, 0.15)"
        ),
      }),
    },
  },
  Heading: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode(props, "gray.300", "gray.600"),
    }),
    variants: {
      projectInfo: (props: StyleFunctionProps) => ({
        color: mode(props, "gray.800", "whiteAlpha.900"),
      }),
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode(props, "brand.300", "brand.600"),
    }),
    variants: {
      noUnderline: (props: StyleFunctionProps) => ({
        position: "relative",
        pb: "0.4rem",
        color: mode(props, "brand.300", "brand.600"),
        textDecoration: "none",

        _link: {
          color: mode(props, "brand.300", "brand.600"),
          textDecoration: "none",
        },
        _visited: {
          color: mode(props, "brand.300", "brand.600"),
          textDecoration: "none",
        },
        _active: {
          color: mode(props, "brand.200", "brand.700"),
          textDecoration: "none",
        },
        _hover: {
          color: mode(props, "brand.200", "brand.700"),
          textDecoration: "none",
        },
      }),
      slidingUnderline: (props: StyleFunctionProps) => ({
        position: "relative",
        pb: "0.4rem",
        color: mode(props, "brand.300", "brand.600"),
        textDecoration: "none",
        _before: {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "2px",
          borderRadius: "2px",
          backgroundColor: mode(props, "brand.200", "brand.600"),
          bottom: "2.5",
          left: "0",
          transformOrigin: "right",
          transform: "scaleX(0)",
          transition: "transform .3s ease-in-out",
        },
        _link: {
          color: mode(props, "brand.300", "brand.600"),
          textDecoration: "none",
        },
        _visited: {
          color: mode(props, "brand.300", "brand.600"),
          textDecoration: "none",
        },
        _active: {
          color: mode(props, "brand.200", "brand.700"),
          textDecoration: "none",
        },
        _hover: {
          color: mode(props, "brand.200", "brand.700"),
          textDecoration: "none",
          _before: {
            transformOrigin: "left",
            transform: "scaleX(1)",
          },
        },
      }),
      activeNavLink: (props: StyleFunctionProps) => ({
        position: "relative",
        textDecoration: "none",
        pb: "0.4rem",
        color: mode(props, "brand.300", "brand.600"),
        _before: {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "2px",
          borderRadius: "2px",
          backgroundColor: mode(props, "brand.200", "brand.600"),
          bottom: "2.5",
          left: "0",
          transformOrigin: "right",
          transform: "scaleX(1)",
          transition: "transform .3s ease-in-out",
          opacity: 1,
        },
        _hover: {
          color: mode(props, "brand.200", "brand.700"),
          textDecoration: "none",
        },
      }),
    },
  },
  Badge: {
    variants: {
      primary: (props: StyleFunctionProps) => ({
        border: "2px solid",
        color: mode(props, "gray.400", "gray.500"),
        borderColor: mode(props, "brand.300", "brand.400"),
      }),
    },
  },
  Card,
  Text: {
    variants: {
      primary: (props: StyleFunctionProps) => ({
        color: mode(props, "gray.200", "gray.700"),
      }),
      secondary: (props: StyleFunctionProps) => ({
        color: mode(props, "gray.200", "gray.600"),
      }),
    },
  },
  ModalCloseButton: {
    variants: {
      closeProject: (props: StyleFunctionProps) => ({
        bgColor: mode(props, "brand.300", "brand.500"),
        _hover: {
          color: mode(props, "brand.300", "brand.500"),
        },
      }),
    },
  },
  Form: {
    variants: {
      floating: (props: StyleFunctionProps) => ({
        container: {
          mt: "1rem",
          _focusWithin: {
            label: {
              ...activeLabelStyles(props),
            },
          },
          "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
            {
              ...activeLabelStyles(props),
            },

          label: {
            color: mode(props, "gray.600", "gray.500"),
            top: 0,
            left: 0,
            zIndex: 2,
            position: "absolute",
            backgroundColor: "none",
            pointerEvents: "none",
            mx: 3,
            px: 1,
            my: 2,
            transformOrigin: "left top",
            transition: "transform 0.3s ease-in",
          },
        },
      }),
    },
  },
} as const;

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components,
    breakpoints,
    boxShadow,
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
