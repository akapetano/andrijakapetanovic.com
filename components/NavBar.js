import {
  HStack,
  Box,
  useDisclosure,
  Flex,
  Link,
  Heading,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { name } from './Layout';
import { DarkModeSwitch } from './DarkModeSwitch';
// import HamburgerMenu from './HamburgerMenu';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const isActive = router.pathname === '/';

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
    >
      <Box>
        <Heading as="h2" size="md">
          {name}
        </Heading>
      </Box>
      <HStack spacing={'1rem'} align="center">
        <HStack
          spacing={'1rem'}
          align="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          <NextLink passHref href="/about">
            <Link color={isActive ? 'red' : 'blue'}>About</Link>
          </NextLink>
          <NextLink passHref href="/portfolio">
            <Link color={isActive ? 'red' : 'blue'}>Portfolio</Link>
          </NextLink>
          <NextLink passHref href="/blog">
            <Link color={isActive ? 'red' : 'blue'}>Blog</Link>
          </NextLink>
        </HStack>
        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
}
