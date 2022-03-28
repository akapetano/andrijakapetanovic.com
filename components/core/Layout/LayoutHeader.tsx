import { Box, BoxProps } from '@chakra-ui/react';
import Navigation from '../../Navigation';

export default function LayoutHeader({ ...restProps }: BoxProps) {
  return (
    <Box {...restProps}>
      <Navigation />
    </Box>
  );
}
