import { useColorModeValue, Flex, Box, Image, Link } from "@chakra-ui/react";
import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import NextLink from "next/link";

interface IAuthorImageProps {
  home?: boolean;
}

export default function AuthorImage({ home }: IAuthorImageProps) {
  const colorMode = useColorModeValue("lightMode", "darkMode");

  return (
    <Box>
      {home ? (
        <Flex justify="center">
          <Box margin="0 0 1.5rem">
            {colorMode === "lightMode" ? (
              <Image
                src="/images/andrija-kapetanovic.jpg"
                height={144}
                width={144}
                alt="Picture of the site creator, Andrija Kapetanović"
                rounded="full"
              />
            ) : (
              <DynamicShadowImage
                src="/images/andrija-kapetanovic-dark.jpg"
                height={144}
                width={144}
                alt="Picture of the site creator, Andrija Kapetanović (dark side)"
              />
            )}
          </Box>
        </Flex>
      ) : (
        <Flex justify="center">
          <Flex flexDir="column" align="center" margin="0 0 1.5rem">
            <Link as={NextLink} href="/" _before={{ content: "none" }}>
              {colorMode === "lightMode" ? (
                <Image
                  src="/images/andrija-kapetanovic.jpg"
                  height={108}
                  width={108}
                  alt="Andrija Kapetanović"
                  rounded="full"
                />
              ) : (
                <DynamicShadowImage
                  src="/images/andrija-kapetanovic-dark.jpg"
                  height={108}
                  width={108}
                  alt="Andrija Kapetanović"
                />
              )}
            </Link>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
