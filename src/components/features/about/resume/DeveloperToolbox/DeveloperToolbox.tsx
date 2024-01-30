"use client";

import {
  Box,
  Heading,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function DeveloperToolbox() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box color={textColor}>
      <Heading fontSize="large" as="h3" textTransform="uppercase" mb="0.5rem">
        Developer Toolbox
      </Heading>
      <Divider m="0 0 0.5rem 0" />
      <Text fontSize="medium">
        Next.js | React | Nuxt.js | Vue | TypeScript | JavaScript | CSS | Sass |
        Chakra UI | HTML | Git | GitHub | Linux | Node.js
      </Text>
      <Divider m="0.5rem 0" />
    </Box>
  );
}
