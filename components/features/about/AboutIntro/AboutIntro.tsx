import { Text, Heading, useColorModeValue } from '@chakra-ui/react';

export function AboutIntro() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0">
        About
      </Heading>
      <Text color={textColor}>I was born in Zadar, Croatia.</Text>
    </>
  );
}
