"use client";

import { Link, Text, Heading, useColorModeValue, Box } from "@chakra-ui/react";
import NextLink from "next/link";

export function AboutIntro() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box mb="2rem" color={textColor}>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0 0.5rem 0">
        About me
      </Heading>
      <Text fontSize="smaller" mb="0.5rem">
        I&apos;m a front-end developer and translator from Zadar, Croatia, who
        specializes in building web applications in React, and its framework
        Next.js. As of June 2022, I&apos;m working at{" "}
        <Link
          href="https://craftedup.com/"
          target="_blank"
          rel="noreferrer"
          variant="withoutUnderline"
        >
          Crafted
        </Link>
        , a digital studio in Indianapolis, US.
      </Text>
      <Text fontSize="smaller" mb="0.5rem">
        In 2019, I attained my master&apos;s degree in English and German
        language at the University of Zadar. From June 2017 to January 2022 I
        worked at the university&apos;s international relations office where I
        took the first steps in web development through simple content managing
        via CMS. With the background in international relations, I am skilled in
        communication with a high level of intercultural competence.
      </Text>
      <Text fontSize="smaller" mb="0.5rem">
        In July 2021, I decided to change my career, and become a front-end
        developer. Nine months in the journey, I&apos;ve created this website.
        You can read more about it in my{" "}
        <Link
          as={NextLink}
          href="/blog/posts/my-first-post-and-the-journey-so-far"
          variant="withoutUnderline"
        >
          first blog post
        </Link>
        .
      </Text>
    </Box>
  );
}
