import { Text, useColorModeValue, Box, Link } from '@chakra-ui/react';

export function AboutOutro() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box mb="1rem">
      <Text fontSize="smaller" color={textColor} mb="0.5rem">
        I&apos;m currently employed as a front-end developer at{' '}
        <a href="https://craftedup.com/" target="_blank" rel="noreferrer">
          Crafted
        </a>
        , a digital studio in Indianapolis, US.
      </Text>
    </Box>
  );
}
