import { Box, BoxProps } from '@chakra-ui/react';

interface ILayoutProps extends BoxProps {
  home?: boolean;
}

export default function Layout({ home, ...restProps }: ILayoutProps) {
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
