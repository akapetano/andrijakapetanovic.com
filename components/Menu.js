import { HStack } from '@chakra-ui/react';
import { NextLink } from 'next/link';
import { Link } from '@chakra-ui/react';

export default function Menu() {
  return (
    <HStack
      spacing={'1rem'}
      align="center"
      display={['none', 'none', 'flex', 'flex']}
      height="100vh"
      width="100vw"
      position="fixed"
      top="0"
      left="0"
    >
      {NAV_ITEMS.map((navItem) => (
        <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
          <Link>{navItem}</Link>
        </NextLink>
      ))}
    </HStack>
  );
}
