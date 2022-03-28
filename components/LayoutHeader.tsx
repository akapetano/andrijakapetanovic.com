import NextHead from './NextHead';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';

export default function LayoutHeader({ title }) {
  return (
    <Box>
      <NextHead title={title} />
      <Navigation />
    </Box>
  );
}
