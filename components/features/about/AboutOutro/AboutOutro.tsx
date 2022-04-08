import { Link, Text, Heading, useColorModeValue, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { AboutActionButtons } from '../AboutActionButtons/AboutActionButtons';

export function AboutOutro() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box mb="1rem">
      <Text fontSize="smaller" color={textColor} mb="0.5rem">
        I&apos;m currently looking for a web developer role, and I&apos;m
        looking forward to expending my dev toolbox. In case you think that I
        would be a good fit for your team, please do not hesitate to contact me!
      </Text>
    </Box>
  );
}
