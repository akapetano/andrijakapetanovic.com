import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

export default function Logo() {
  const logoColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <NextLink passHref href="/">
      <Link
        fontSize={['lg', 'lg', 'lg', 'xl', 'xl']}
        _hover={{ textDecoration: 'none' }}
      >
        Andrija Kapetanović
      </Link>
    </NextLink>
  );
}
