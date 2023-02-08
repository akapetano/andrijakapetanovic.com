import { useColorModeValue, Flex, Box, Image, Link } from "@chakra-ui/react";
import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import NextLink from "next/link";

interface IAuthorImageProps {
  isHome?: boolean;
}

export default function AuthorImage({ isHome }: IAuthorImageProps) {
  const colorMode = useColorModeValue("lightMode", "darkMode");

  return (
    <Box>
      <Flex justify="center">
        <Flex flexDir="column" align="center" margin="0 0 1.5rem">
          {colorMode === "lightMode" ? (
            <Image
              src="/images/andrija-kapetanovic.jpg"
              height={isHome ? 144 : 108}
              width={isHome ? 144 : 108}
              alt="Picture of the site creator, Andrija Kapetanović"
              rounded="full"
            />
          ) : (
            <DynamicShadowImage
              src="/images/andrija-kapetanovic-dark.jpg"
              height={isHome ? 144 : 108}
              width={isHome ? 144 : 108}
              alt="Picture of the site creator, Andrija Kapetanović (dark side)"
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
