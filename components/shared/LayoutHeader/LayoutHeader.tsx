import { Box, BoxProps } from '@chakra-ui/react';
import Navigation from '../../core/Navigation/Navigation';

export default function LayoutHeader({ ...restProps }: BoxProps) {
  return (
    <Box {...restProps}>
      <Navigation />
    </Box>
  );
}
