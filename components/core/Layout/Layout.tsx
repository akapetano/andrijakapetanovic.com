import { Box, BoxProps } from '@chakra-ui/react';

export default function Layout({ ...restProps }: BoxProps) {
  return (
    <Box
      maxWidth="36rem"
      height="100%"
      padding="0 1rem"
      margin="8rem auto 6rem"
      {...restProps}
    />
  );
}
