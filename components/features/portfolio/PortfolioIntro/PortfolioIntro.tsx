import { Text, Heading, Container } from '@chakra-ui/react';

export function PortfolioIntro() {
  return (
    <Container fontSize="1.2rem" lineHeight="1.5" pt="1px">
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0">
        Portfolio
      </Heading>
      <Text opacity="0.8">Check out some of my projects...</Text>
    </Container>
  );
}
