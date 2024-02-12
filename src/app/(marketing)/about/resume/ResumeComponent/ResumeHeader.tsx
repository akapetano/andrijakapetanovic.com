"use client";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaGithub, FaMapPin, FaGlobe } from "react-icons/fa";
import AuthorImage from "../../../../../components/core/AuthorImage/AuthorImage";

export function ResumeHeader() {
  return (
    <HStack alignSelf="center" w="100%">
      <Box p="2rem">
        <AuthorImage isHome={false} hasDynamicShadow={false} />
      </Box>
      <VStack alignItems="flex-start">
        <Heading as="h1" fontSize="xx-large">
          Andrija Kapetanović
        </Heading>
        <HStack gap="0.5rem">
          <HStack gap="0.2rem">
            <Text fontWeight="bold">Nationality:</Text>
            <Text>Croatian</Text>
          </HStack>
          <HStack gap="0.2rem">
            <Icon as={PhoneIcon} />
            <Text>(+385) 919881329</Text>
          </HStack>
          <HStack gap="0.2rem">
            <Text fontWeight="bold">Date of birth:</Text>
            <Text>07/07/1993</Text>
          </HStack>
        </HStack>
        <HStack gap="0.2rem" alignItems="center">
          <Icon as={EmailIcon} />
          <Text fontWeight="bold">Email address:</Text>
          <Link as={NextLink} href="mailto:andrija.kapetanovic@gmail.com">
            andrija.kapetanovic@gmail.com
          </Link>
        </HStack>
        <HStack gap="0.2rem" alignItems="center">
          <Icon as={FaGlobe} />
          <Text fontWeight="bold">Website:</Text>
          <Link
            as={NextLink}
            href="https://www.andrijakapetanovic.com/"
            target="_blank"
          >
            https://www.andrijakapetanovic.com/
          </Link>
        </HStack>
        <HStack gap="0.2rem">
          <HStack gap="0.2rem" alignItems="center">
            <Icon as={FaLinkedinIn} />
            <Text fontWeight="bold" m="0">
              LinkedIn:
            </Text>
            <Link
              as={NextLink}
              href="http://linkedin.com/in/andrija-kapetanovi%C4%87"
              target="_blank"
            >
              http://linkedin.com/in/andrija-kapetanović
            </Link>
          </HStack>
          <HStack gap="0.2rem" alignItems="center">
            <Icon as={FaGithub} />
            <Text fontWeight="bold">GitHub:</Text>
            <Link
              as={NextLink}
              href="http://github.com/akapetano"
              target="_blank"
            >
              github.com/akapetano
            </Link>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
}
