"use client";

import {
  Heading,
  Box,
  Text,
  Link,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

export function ResumeHeader() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box w="100%" m="0.5rem 0">
      <Heading
        as="h2"
        fontSize="1.5rem"
        lineHeight="1.4"
        margin="auto 0 0.5rem 0"
        color={textColor}
        px="1rem"
      >
        Resume
      </Heading>
      <Divider m="0.5rem 0" />
      <Heading
        fontSize="large"
        as="h3"
        fontWeight="600"
        color={textColor}
        mb="0.2rem"
        px="1rem"
      >
        Andrija Kapetanović
      </Heading>
      <Box color={textColor} px="1rem">
        <Text fontSize="medium">Date of birth: 07/07/1993</Text>
        <Text fontSize="medium">Location: Zadar, Croatia</Text>
        <Text fontSize="medium">
          Email:{" "}
          <Link
            type="email"
            href="mailto:andrija.kapetanovic@gmail.com"
            variant="slidingUnderline"
          >
            andrija.kapetanovic@gmail.com
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
