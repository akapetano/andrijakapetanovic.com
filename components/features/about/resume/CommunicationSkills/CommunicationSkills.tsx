import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';

export function CommunicationSkills() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Communication Skills
      </Heading>
      <Divider m="0 0 1rem 0" />
      <UnorderedList fontSize="medium" color={textColor}>
        <ListItem>
          great communication skills in Croatian, English and German acquired in
          the course of education and working in the International Relations
          Office at the University of Zadar
        </ListItem>
        <ListItem>
          everyday oral and written communication and correspondence
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
