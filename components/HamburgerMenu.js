import { Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NextLink } from 'next/link';
import { Link } from '@chakra-ui/react';

export function HamburgerMenu() {
  return (
    <Flex
      w="100vw"
      bgColor="brand.200"
      zIndex={20}
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      flexDir="column"
    >
      {/* <Flex justify="flex-end">
          <IconButton
            aria-label="Open menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
          />
        </Flex>
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close menu"
            size="lg"
            icon={<CloseIcon />}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink passHref href="/about">
            <Link>About</Link>
          </NextLink>
          <NextLink passHref href="/portfolio">
            <Link>Portfolio</Link>
          </NextLink>
          <NextLink passHref href="/blog">
            <Link>Blog</Link>
          </NextLink>
        </Flex> */}
    </Flex>
  );
}
