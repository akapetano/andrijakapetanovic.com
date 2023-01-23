import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ICardProps extends BoxProps {
  children: ReactNode;
}

export function Card({ children, ...restProps }: ICardProps) {
  const cardShadow = useColorModeValue(
    "0 0 10px 0 rgba(0, 0, 0, 0.15)",
    "0 0 10px 0 rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box rounded="lg" p="1rem" boxShadow={cardShadow} {...restProps}>
      {children}
    </Box>
  );
}
