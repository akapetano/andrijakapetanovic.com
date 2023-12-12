import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProjectInfoWrapperProps extends BoxProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  link: string;
  src: string;
  alt: string;
  children: ReactNode;
}

export function ProjectInfoWrapper({
  title,
  shortDescription,
  longDescription,
  link,
  src,
  alt,
  children,
  ...restProps
}: IProjectInfoWrapperProps) {
  const textColor = useColorModeValue("whiteAlpha.900", "gray.800");

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      right="0"
      opacity="0"
      textAlign="center"
      color={textColor}
      transform="translateY(-50%)"
      transition="opacity 300ms cubic-bezier(0.2, 1, 0.3, 1), transform 300ms cubic-bezier(0.2, 1, 0.3, 1)"
      transitionDelay="100ms"
      {...restProps}
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        position="absolute"
        width="100%"
        top="50%"
        transform="translateY(-50%)"
        color={textColor}
      >
        {children}
      </Box>
    </Box>
  );
}
