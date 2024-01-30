"use client";

import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

export function OrganizationalSkills() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box>
      <Heading
        fontSize="large"
        as="h3"
        textTransform="uppercase"
        color={textColor}
        mb="0.5rem"
      >
        Organizational Skills
      </Heading>
      <Divider m="0 0 0.5rem 0" />
      <UnorderedList fontSize="medium" color={textColor}>
        <ListItem>
          as essential component in the work of an International Relations
          Office while in charge of incoming students (processing documentation
          for 70-100 students per semester)
        </ListItem>
        <ListItem>
          organization of Staff Week at the University of Zadar in May 2019
        </ListItem>
        <ListItem>
          teamwork, responsibility, adaptability and flexibility
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0" />
    </Box>
  );
}
