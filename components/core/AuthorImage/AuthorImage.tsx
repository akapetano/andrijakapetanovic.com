import { useColorModeValue, Flex, Box, Image, Link } from '@chakra-ui/react';
import DynamicShadowImage from '../DynamicShadowImage/DynamicShadowImage';
import NextLink from 'next/link';

interface IAuthorImageProps {
  home?: boolean;
}

export default function AuthorImage({ home }: IAuthorImageProps) {
  const imageSrc = useColorModeValue(
    '/images/andrija-kapetanovic.jpg',
    '/images/andrija-kapetanovic-dark.jpg'
  );
  const colorMode = useColorModeValue('lightMode', 'darkMode');

  return (
    <Box>
      {home ? (
        <Flex justify="center">
          <Box margin="0 0 1.5rem">
            {colorMode === 'lightMode' ? (
              <Image
                src={imageSrc}
                height={144}
                width={144}
                alt="Andrija Kapetanović"
                rounded="full"
              />
            ) : (
              <DynamicShadowImage
                src={imageSrc}
                height={144}
                width={144}
                alt="Andrija Kapetanović"
              />
            )}
          </Box>
        </Flex>
      ) : (
        <Flex justify="center">
          <Flex flexDir="column" align="center" margin="0 0 1.5rem">
            <NextLink passHref href="/">
              <Link _before={{ content: 'none' }}>
                {colorMode === 'lightMode' ? (
                  <Image
                    src={imageSrc}
                    height={108}
                    width={108}
                    alt="Andrija Kapetanović"
                    rounded="full"
                  />
                ) : (
                  <DynamicShadowImage
                    src={imageSrc}
                    height={108}
                    width={108}
                    alt="Andrija Kapetanović"
                  />
                )}
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
