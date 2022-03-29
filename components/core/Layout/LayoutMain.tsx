import { Box, BoxProps } from '@chakra-ui/react';
import AuthorImage from '../../AuthorImage';
import HomeIntro from '../../HomeIntro';

interface ILayoutMainProps extends BoxProps {
  home?: boolean;
}
export default function LayoutMain({
  home,
  children,
  ...restProps
}: ILayoutMainProps) {
  return (
    <Box as="main" {...restProps}>
      <AuthorImage home={home} />
      {children}
    </Box>
  );
}
