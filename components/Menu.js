import { HStack } from '@chakra-ui/react';
import { NextLink } from 'next/link';
import { Link } from '@chakra-ui/react';

export default function Menu({ NAV_ITEMS }) {
  return (
    <HStack
      spacing={'1rem'}
      align="center"
      display={['none', 'none', 'flex', 'flex']}
    >
      {NAV_ITEMS?.map((navItem) => (
        <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
          <Link>{navItem}</Link>
        </NextLink>
      ))}
    </HStack>
  );
}
