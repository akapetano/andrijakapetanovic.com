import { Box, BoxProps } from '@chakra-ui/react';
import AuthorImage from '../../core/AuthorImage/AuthorImage';
import BackToHome from '../BackToHome/BackToHome';

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
      {!home ? <BackToHome /> : null}
    </Box>
  );
}
