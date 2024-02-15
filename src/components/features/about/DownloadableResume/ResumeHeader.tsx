"use client";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AuthorImage from "../../../core/AuthorImage/AuthorImage";

export function ResumeHeader() {
  const brandColor = useColorModeValue("brand.500", "brand.200");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <HStack alignSelf="center" w="100%" color={textColor} as="header">
      <Box margin={"-1rem 0 -1rem -2.5rem"}>
        <AuthorImage isHome={false} hasDynamicShadow={false} margin="2.5rem" />
      </Box>
      <VStack alignItems="flex-start">
        <Heading color={textColor} as="h1" fontSize="xx-large">
          Andrija Kapetanović
        </Heading>
        <HStack gap="0.5rem" fontSize="medium">
          <HStack gap="0.2rem">
            <Text fontWeight="bold">Nationality:</Text>
            <Text>Croatian</Text>
          </HStack>
          <HStack gap="0.2rem">
            <Icon color={brandColor} as={PhoneIcon} />
            <Text>(+385) 919881329</Text>
          </HStack>
          <HStack gap="0.2rem">
            <Text fontWeight="bold">Date of birth:</Text>
            <Text>07/07/1993</Text>
          </HStack>
        </HStack>
        <HStack gap="0.2rem" alignItems="center" fontSize="medium">
          <Icon color={brandColor} as={EmailIcon} />
          <Text fontWeight="bold">Email address:</Text>
          <Link as={NextLink} href="mailto:andrija.kapetanovic@gmail.com">
            andrija.kapetanovic@gmail.com
          </Link>
        </HStack>
        <HStack gap="0.2rem" alignItems="center" fontSize="medium">
          <Icon color={brandColor} as={FaGlobe} />
          <Text fontWeight="bold">Website:</Text>
          <Link
            as={NextLink}
            href="https://www.andrijakapetanovic.com/"
            target="_blank"
          >
            https://www.andrijakapetanovic.com/
          </Link>
        </HStack>
        <HStack gap="0.5rem" fontSize="medium">
          <HStack gap="0.2rem" alignItems="center">
            <Icon color={brandColor} as={FaLinkedinIn} />
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
            <Icon color={brandColor} as={FaGithub} />
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
        <HStack gap="0.2rem" alignItems="center" fontSize="medium">
          <Icon color={brandColor} as={FaMapMarkerAlt} />
          <Text fontWeight="bold">Home:</Text>
          <Text>23000 Zadar, Croatia</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
