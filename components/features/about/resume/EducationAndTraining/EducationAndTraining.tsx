import { Box, Heading, Divider, Text } from '@chakra-ui/react';

export function EducationAndTraining() {
  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Education and Training
      </Heading>
      <Divider mb="1rem" />
      <Text fontSize="medium">2016 - 2019</Text>
      <Heading fontSize="medium" as="h4">
        Master&apos;s degree in English Language and Literature (Literary
        Translation module) and Master&apos;s degree in German Language and
        Literature (Translation Studies) - University of Zadar
      </Heading>
      <Divider m="0.5rem 0 1rem 0" />
      <Text fontSize="medium">2012 - 2016</Text>
      <Heading fontSize="medium" as="h4">
        Bachelor&apos;s degree in English Language and Literature (Literary
        Translation module) and Bachelor&apos;s degree in German Language and
        Literature - University of Zadar
      </Heading>
      <Divider m="0.5rem 0 1rem 0" />
      <Text fontSize="medium">2008 - 2012</Text>
      <Heading fontSize="medium" as="h4">
        Economist - Business High School in Zadar
      </Heading>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
