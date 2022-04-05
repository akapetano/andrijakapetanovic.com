import { Container, ContainerProps } from '@chakra-ui/react';

export function SectionContainer({ children, ...restProps }: ContainerProps) {
  return (
    <Container
      as="section"
      display="flex"
      flexDir="column"
      justifyContent="space-around"
      fontSize="1.2rem"
      lineHeight="1.5"
      pt="1px"
      {...restProps}
    >
      {children}
    </Container>
  );
}
