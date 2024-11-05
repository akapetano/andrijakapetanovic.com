import { Container, ContainerProps } from "@chakra-ui/react";

export default function Layout({ ...restProps }: ContainerProps) {
  return (
    <Container
      p={0}
      maxWidth={{ base: "40rem", xl: "45rem" }}
      height="100%"
      margin={[
        "6rem auto 0",
        "6rem auto 0",
        "6rem auto 0",
        "6rem auto 0",
        "6rem auto 0",
      ]}
      paddingBottom="2rem"
      minH="calc(100vh - 3.5rem)"
      {...restProps}
    />
  );
}
