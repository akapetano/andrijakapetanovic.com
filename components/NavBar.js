import { HStack, Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { name } from './Layout';
import { DarkModeSwitch } from './DarkModeSwitch';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

export default function NavBar() {
  return (
    <Flex
      align="center"
      justify="space-around"
      pos="fixed"
      top="0"
      right="0"
      bg={(theme) => theme.boxShadow}
      px={4}
      width="100%"
      height="5rem"
      boxShadow={(theme) => theme.boxShadow}
      backgroundColor="whiteAlpha.100"
      zIndex={100}
    >
      <Box>
        <Heading as="h2" size="md">
          {name}
        </Heading>
      </Box>
      <HStack spacing={'2rem'} align="center">
        <HStack
          spacing={'2rem'}
          align="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          {NAV_ITEMS?.map((navItem) => (
            <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
              <Link>{navItem}</Link>
            </NextLink>
          ))}
        </HStack>
        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
}
