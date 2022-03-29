import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

export default function NavItems({ fontSize, p }) {
  return (
    <>
      {NAV_ITEMS?.map((navItem) => (
        <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
          <Link
            fontSize={fontSize}
            p={p}
            textTransform="uppercase"
            fontWeight={300}
            _hover={{ opacity: '1' }}
          >
            {navItem}
          </Link>
        </NextLink>
      ))}
    </>
  );
}
