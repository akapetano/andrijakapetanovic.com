"use client";

import {
  Text,
  Box,
  Heading,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export default function HomeIntro() {
  const nameColor = useColorModeValue("brand.600", "brand.300");

  return (
    <Box pb="2rem" textAlign={["center", "center", "left", "left", "left"]}>
      <Heading
        fontSize={["3xl", "3xl", "5xl", "5xl", "5xl"]}
        sx={{ ".authorName": { color: nameColor } }}
        pb="1rem"
      >
        Hi, I&apos;m <strong className="authorName">Andrija</strong>.
      </Heading>
      <Text variant="secondary" fontSize={["large", "large", "xl", "xl", "xl"]}>
        I&apos;m a front-end developer and translator who specializes in
        building front-end applications with great user experience, working at{" "}
        <ChakraLink
          variant={"slidingUnderline"}
          as={Link}
          href="https://craftedup.com/"
          target="_blank"
          rel="noreferrer"
          color={nameColor}
        >
          Crafted
        </ChakraLink>
        .
      </Text>
    </Box>
  );
}
