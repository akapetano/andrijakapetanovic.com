import { Box, Heading, Divider, Text } from '@chakra-ui/react';

export function CommunicationSkills() {
  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Communication Skills
      </Heading>
      <Divider m="0 0 1rem 0" />
      <Text fontSize="medium">
        - great communication skills in Croatian, English and German acquired in
        the course of education and working in the International Relations
        Office at the University of Zadar
      </Text>
      <Text fontSize="medium">
        - everyday oral and written communication and correspondence
      </Text>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
