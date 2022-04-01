import { Box, BoxProps } from '@chakra-ui/react';
import AuthorImage from '../../core/AuthorImage/AuthorImage';

interface ILayoutMainProps extends BoxProps {
  home?: boolean;
}
export default function LayoutMain({
  home,
  children,
  ...restProps
}: ILayoutMainProps) {
  return (
    <Box as="main" {...restProps} pb="5rem">
      <AuthorImage home={home} />
      {children}
    </Box>
  );
}
