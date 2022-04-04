import { Text, Heading, useColorModeValue } from '@chakra-ui/react';

export function PortfolioIntro() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0">
        Portfolio
      </Heading>
      <Text color={textColor}>Check out some of my projects...</Text>
    </>
  );
}
