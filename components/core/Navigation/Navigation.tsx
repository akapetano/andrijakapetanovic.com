import { HStack, Box, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { DarkModeSwitch } from '../DarkModeSwitch/DarkModeSwitch';
import { useColorModeValue } from '@chakra-ui/react';
import HamMenu from '../HamMenu/HamMenu';
import NavItems from '../NavItems/NavItems';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

export default function Navigation() {
  const navBoxShadow = useColorModeValue(
    '0 0 4px 0 rgba(0, 0, 0, 0.15)',
    '0 0 4px 0 rgba(255, 255, 255, 0.1)'
  );

  const navBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="header"
      bg={navBg}
      align="center"
      pos="fixed"
      top="0"
      right="0"
      px={4}
      width="100%"
      height="5rem"
      boxShadow={navBoxShadow}
      zIndex="100"
    >
      <Box flex="1">
        <NextLink passHref href="/">
          <Link fontSize="lg" _hover={{ textDecoration: 'none' }}>
            Andrija Kapetanović
          </Link>
        </NextLink>
      </Box>
      <Box flex="1" display={['none', 'none', 'flex', 'flex']}>
        <HStack spacing={'2rem'}>
          <NavItems fontSize={'sm'} p="0" />
        </HStack>

        <DarkModeSwitch />

        <HamMenu />
      </Box>
    </Flex>
  );
}
