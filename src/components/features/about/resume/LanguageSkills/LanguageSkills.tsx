import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

export function LanguageSkills() {
  // const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Language Skills
      </Heading>
      <Divider m="0 0 1rem 0" />
      <Box color={"gray.600"}>
        <Text fontSize="medium">Native language: Croatian</Text>
        <Text fontSize="medium">Other languages:</Text>
        <UnorderedList fontSize="medium">
          <ListItem>English (C2)</ListItem>
          <ListItem>German (C1)</ListItem>
          <ListItem>Italian (B1)</ListItem>
        </UnorderedList>
      </Box>
      <Text fontSize="small" color="gray.500" fontStyle="italic">
        CEFR Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and
        C2: Proficient user
      </Text>
      <Text fontSize="small" color="gray.500" fontStyle="italic">
        (Source:{" "}
        <ChakraLink
          variant="withoutUnderline"
          href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions"
          target="_blank"
          rel="noreferrer"
        >
          Council of Europe
        </ChakraLink>
        )
      </Text>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}