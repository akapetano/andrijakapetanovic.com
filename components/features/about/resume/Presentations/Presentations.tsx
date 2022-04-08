import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export function Presentations() {
  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Presentations
      </Heading>
      <Divider m="0 0 1rem 0" />
      <Text fontSize="medium">
        Held and organized the following presentations:
      </Text>
      <UnorderedList fontSize="medium">
        <ListItem>
          Welcome Day for international students, International Relations Office
          - from academic year 2019/2022 to 2021/2022 once per semester, Zadar
        </ListItem>
        <ListItem>
          Staff Training Week, International Relations Office - Topic: quality
          management of partnerships in Erasmus+ KA107 programme; good practices
          in the field of security of exchange students/staff and Erasmus+
          without paper, Zadar, 27 - 31 May 2019
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
