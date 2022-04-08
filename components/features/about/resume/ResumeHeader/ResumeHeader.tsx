import { Heading, Box, Text, Link, Divider } from '@chakra-ui/react';

export function ResumeHeader() {
  return (
    <Box>
      <Heading fontSize="2xl" as="h2">
        Andrija Kapetanović
      </Heading>
      <Text fontSize="medium">Date of birth: 07/07/1993</Text>
      <Text fontSize="medium">
        Email:{' '}
        <Link
          href="mailto:andrija.kapetanovic@gmail.com"
          variant="withoutUnderline"
        >
          andrija.kapetanovic@gmail.com
        </Link>
      </Text>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
