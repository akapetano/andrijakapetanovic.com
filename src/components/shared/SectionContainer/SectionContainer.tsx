import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";

interface ISectionContainerProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string | number;
}

export function SectionContainer({
  children,
  justifyContent = "space-around",
  alignItems = "start",
  ...restProps
}: ISectionContainerProps) {
  return (
    <Container
      as="section"
      display="flex"
      flexDir="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      fontSize="1.2rem"
      lineHeight="1.5"
      pt="1px"
      {...restProps}
    >
      {children}
    </Container>
  );
}
