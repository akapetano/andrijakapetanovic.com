import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function BackToHome() {
  return (
    <Box margin="3rem 0 0">
      <NextLink passHref href="/">
        <Link fontSize="md">← Back to home</Link>
      </NextLink>
    </Box>
  );
}
