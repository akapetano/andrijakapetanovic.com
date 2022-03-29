import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export default function Logo() {
  return (
    <NextLink passHref href="/">
      <Link fontSize="lg" _hover={{ textDecoration: 'none' }}>
        Andrija Kapetanović
      </Link>
    </NextLink>
  );
}
