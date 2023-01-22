import {
  Link,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NextLink from "next/link";

export default function Footer() {
  const iconColor = useColorModeValue("black", "gray.400");
  const githubIconHover = useColorModeValue("black", "white");
  const footerBorder = useColorModeValue(
    "1px solid rgba(0, 0, 0, 0.05)",
    "1px solid rgba(255, 255, 255, 0.05)"
  );
  const footerBg = useColorModeValue("white", "gray.800");
  const copyrightColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Flex
      as="footer"
      bg={footerBg}
      borderTop={footerBorder}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDir="column"
      pos="fixed"
      bottom="0"
      left="0"
      width="100%"
      height={["6rem", "6rem", "6rem", "6rem", "6rem"]}
      boxShadow="base"
      overflow="hidden"
      zIndex="100"
    >
      <HStack
        spacing={["2rem", "2rem", "2rem", "4rem", "4rem"]}
        m={["0", "0", "0", "1rem 0 0 0", "1rem 0 0 0"]}
      >
        <Link
          href="https://github.com/akapetano"
          target="_blank"
          _before={{ content: "none" }}
        >
          <Icon
            as={FaGithub}
            color={iconColor}
            opacity="0.6"
            boxSize={["4", "4", "4", "5", "5"]}
            transition="all 0.2s ease-in-out"
            _hover={{
              opacity: 1,
              transform: "scale(1.2)",
              color: `${githubIconHover}`,
            }}
            _focus={{ boxShadow: "outline" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrija-kapetanovi%C4%87"
          target="_blank"
          _before={{ content: "none" }}
        >
          <Icon
            as={FaLinkedin}
            color={iconColor}
            opacity="0.6"
            boxSize={["4", "4", "4", "5", "5"]}
            transition="all 0.2s ease-in-out"
            _hover={{ opacity: 1, transform: "scale(1.2)", color: "#0e76a8" }}
            _focus={{ boxShadow: "outline" }}
          />
        </Link>
        <Link
          href="https://twitter.com/AndiKapetanovic"
          target="_blank"
          _before={{ content: "none" }}
        >
          <Icon
            as={FaTwitter}
            color={iconColor}
            opacity="0.6"
            boxSize={["4", "4", "4", "5", "5"]}
            transition="all 0.2s ease-in-out"
            _hover={{ opacity: 1, transform: "scale(1.2)", color: "#00ACEE" }}
            _focus={{ boxShadow: "outline" }}
          />
        </Link>
      </HStack>
      <Link as={NextLink} href="/" variant="withoutUnderline">
        <Text
          fontSize={["xx-small", "xx-small", "xx-small", "xs", "xs"]}
          color={copyrightColor}
          pb="0"
        >
          &copy; 2023 Andrija Kapetanović &bull; Front-end web developer &bull;
          Translator
        </Text>
      </Link>
    </Flex>
  );
}
