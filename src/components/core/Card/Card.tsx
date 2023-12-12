import {
  Box,
  BoxProps,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ICardProps extends BoxProps {
  children: ReactNode;
}

export function Card({ children, ...restProps }: ICardProps) {
  const styles = useStyleConfig("Card");

  return (
    <Box __css={styles} {...restProps}>
      {children}
    </Box>
  );
}
