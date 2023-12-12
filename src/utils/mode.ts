import { StyleFunctionProps } from "@chakra-ui/react";

export const mode = (
  { colorMode }: StyleFunctionProps,
  darkModeValue: string,
  lightModeValue: string
) => {
  switch (colorMode) {
    case "light":
      return lightModeValue;
    case "dark":
      return darkModeValue;
    default:
      return lightModeValue;
  }
};
