import { HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

export default function NavItems({ fontSize, ...restProps }) {
  return (
    <>
      {NAV_ITEMS?.map((navItem) => (
        <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
          <Link
            fontSize={fontSize}
            textTransform="uppercase"
            fontWeight={300}
            _hover={{ opacity: '1' }}
            {...restProps}
          >
            {navItem}
          </Link>
        </NextLink>
      ))}
    </>
  );
}
