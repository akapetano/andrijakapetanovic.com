import { extendTheme, theme as base, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleProps } from "@chakra-ui/styled-system";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const boxShadow = "0px 0px 4px 0px rgba(0, 0, 0, 0.3)";

const activeLabelStyles = (props: StyleProps) => ({
  transform: "scale(0.85) translateY(-50px) translateX(-22px) ",
  transition: "transform 0.3s ease-out",
  color: mode("gray.900", "gray.100")(props),
});

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleProps) => ({
      "::-webkit-scrollbar": {
        width: "0.6em",
      },
      "::-webkit-scrollbar-track": {
        boxShadow: mode(
          "inset 0 0 6px rgba(0, 0, 0, 0.3)",
          "inset 0 0 6px rgba(255, 255, 255, 0.3)"
        )(props),
      },

      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: mode("brand.600", "brand.300")(props),
        boxShadow: mode(
          "inset 0 0 12px rgba(4, 53, 91, 0.5)",
          "inset 0 0 12px rgba(3, 57, 68, 0.9)"
        )(props),
        outline: "1px solid #3498db",
      },

      "html, body": {
        color: mode("gray.700", "gray.200")(props),
        padding: "0",
        margin: "0",
        fontSize: "1.2rem",
        lineHeight: 1.6,
        minHeight: "fit-content",
      },
      ul: {
        marginLeft: "2rem",
      },
      a: {
        color: mode("brand.600", "brand.300")(props),
        position: "relative",
        textDecoration: "none",
        pb: "0.2rem",
        _before: {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "2px",
          borderRadius: "2px",
          backgroundColor: mode("brand.600", "brand.200")(props),
          bottom: "0",
          left: "0",
          transformOrigin: "right",
          transform: "scaleX(0)",
          transition: "transform .3s ease-in-out",
        },
        _link: {
          color: mode("brand.600", "brand.300")(props),
          textDecoration: "none",
        },
        _visited: {
          color: mode("brand.600", "brand.300")(props),
          textDecoration: "none",
        },
        _hover: {
          color: mode("brand.700", "brand.200")(props),
          textDecoration: "none",
          _before: {
            backgroundColor: mode("brand.700", "brand.200")(props),
            transformOrigin: "left",
            transform: "scaleX(1)",
          },
        },
        _active: {
          color: mode("brand.700", "brand.200")(props),
          textDecoration: "none",
        },
      },
    }),
  },
  colors: {
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
    selected: { color: mode("brand.700", "brand.500") },
  },
  fonts: {
    body: `Roboto Condensed, ${base.fonts?.body}`,
    heading: `Montserrat, ${base.fonts?.heading}`,
  },
  components: {
    Button: {
      variants: {
        primary: (props: StyleProps) => ({
          color: mode("white", "gray.800")(props),
          bg: mode("brand.600", "brand.300")(props),
          _hover: {
            color: mode("gray.50", "gray.700")(props),
            bg: mode("brand.700", "brand.200")(props),
            borderColor: mode("brand.700", "brand.200")(props),
          },
        }),
        primaryGhost: (props: StyleProps) => ({
          color: mode("brand.500", "brand.300")(props),
          border: "2px solid",
          _hover: {
            color: mode("gray.100", "gray.800")(props),
            bg: mode("brand.700", "brand.200")(props),
            borderColor: mode("brand.700", "brand.200")(props),
          },
        }),
        secondary: (props: StyleProps) => ({
          color: mode("white", "gray.800")(props),
          bg: mode("accent.300", "accent.100")(props),
          _hover: {
            bg: mode("accent.400", "accent.200")(props),
          },
        }),
        secondaryGhost: (props: StyleProps) => ({
          border: "2px solid",
          outline: "none",
          color: mode("accent.300", "accent.100")(props),
          borderColor: mode("accent.300", "accent.100")(props),
          _hover: {
            color: mode("white", "gray.800")(props),
            bg: mode("accent.400", "accent.200")(props),
            borderColor: mode("accent.400", "accent.200")(props),
          },
        }),
      },
    },
    Link: {
      baseStyle: (props: StyleProps) => ({
        color: mode("brand.600", "brand.300")(props),
      }),
      variants: {
        withoutUnderline: (props: StyleProps) => ({
          color: mode("brand.600", "brand.300")(props),
          _link: {
            color: mode("brand.600", "brand.300")(props),
            textDecoration: "none",
          },
          _visited: {
            color: mode("brand.600", "brand.300")(props),
            textDecoration: "none",
          },
          _active: {
            color: mode("brand.700", "brand.200")(props),
            textDecoration: "none",
          },
          _hover: {
            color: mode("brand.700", "brand.200")(props),
            textDecoration: "none",
          },
        }),
      },
    },
    Badge: {
      variants: {
        primary: (props: StyleProps) => ({
          border: "2px solid",
          color: mode("gray.500", "gray.400")(props),
          borderColor: mode("brand.400", "brand.300")(props),
        }),
      },
    },
    Text: {
      variants: {
        primary: (props: StyleProps) => ({
          color: mode("gray.700", "gray.200")(props),
        }),
        secondary: (props: StyleProps) => ({
          color: mode("gray.600", "gray.400")(props),
        }),
      },
    },
    ModalCloseButton: {
      variants: {
        closeProject: (props: StyleProps) => ({
          bgColor: mode("brand.500", "brand.300")(props),
          _hover: {
            color: mode("brand.500", "brand.300")(props),
          },
        }),
      },
    },
    Form: {
      variants: {
        floating: (props: StyleProps) => ({
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
              color: mode("gray.500", "gray.600")(props),
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
  },
  breakpoints,
  boxShadow,
});

export default theme;
