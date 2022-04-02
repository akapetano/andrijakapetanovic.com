import { Container, ContainerProps } from '@chakra-ui/react';

export function PortfolioWrapper({ children }: ContainerProps) {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="space-around"
      fontSize="1.2rem"
      p="1px"
    >
      {children}
    </Container>
  );
}
