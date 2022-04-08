import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export function OrganizationalSkills() {
  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Organizational Skills
      </Heading>
      <Divider m="0 0 1rem 0" />
      <UnorderedList fontSize="medium">
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
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
