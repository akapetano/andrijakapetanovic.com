import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';

export function LanguageSkills() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Language Skills
      </Heading>
      <Divider m="0 0 1rem 0" />
      <Box color={textColor}>
        <Text fontSize="medium">Native language: Croatian</Text>
        <Text fontSize="medium">Other languages:</Text>
        <UnorderedList fontSize="medium">
          <ListItem>English (C2)</ListItem>
          <ListItem>German (C1)</ListItem>
          <ListItem>Italian (B1)</ListItem>
        </UnorderedList>
      </Box>
      <Text fontSize="small" color="gray.500" fontStyle="italic">
        Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2:
        Proficient user
      </Text>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
