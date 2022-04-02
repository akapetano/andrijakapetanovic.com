import { Container, ContainerProps } from '@chakra-ui/react';

export default function Layout({ ...restProps }: ContainerProps) {
  return (
    <Container
      maxWidth="40rem"
      height="100%"
      margin="8rem auto 6rem"
      {...restProps}
    />
  );
}
