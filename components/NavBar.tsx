import { HStack, Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { name } from './Layout';
import { DarkModeSwitch } from './DarkModeSwitch';
import { useColorModeValue } from '@chakra-ui/react';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

export default function NavBar() {
  const navBoxShadow = useColorModeValue(
    '0 0 4px 0 rgba(0, 0, 0, 0.15)',
    '0 0 4px 0 rgba(255, 255, 255, 0.1)'
  );
  const nameLogo = useColorModeValue('gray.700', 'gray.200');

  return (
    <Flex
      align="center"
      justify="space-around"
      pos="fixed"
      top="0"
      right="0"
      px={4}
      width="100%"
      height="5rem"
      boxShadow={navBoxShadow}
    >
      <Box>
        <NextLink passHref href="/">
          <Link _hover={{ textDecoration: 'none' }}>
            <Heading color={nameLogo} as="h2" size="md">
              {name}
            </Heading>
          </Link>
        </NextLink>
      </Box>
      <HStack spacing={'2rem'} align="center">
        <HStack
          spacing={'2rem'}
          align="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          {NAV_ITEMS?.map((navItem) => (
            <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
              <Link fontSize="xl">{navItem}</Link>
            </NextLink>
          ))}
        </HStack>
        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
}
