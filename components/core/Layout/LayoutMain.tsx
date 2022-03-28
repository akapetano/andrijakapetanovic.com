import { Box, BoxProps } from '@chakra-ui/react';
import AuthorImage from '../../AuthorImage';

interface ILayoutMainProps extends BoxProps {
  home?: boolean;
}
export default function LayoutMain({ home, ...restProps }: ILayoutMainProps) {
  return (
    <Box as="main" {...restProps}>
      <AuthorImage home={home} />
    </Box>
  );
}
