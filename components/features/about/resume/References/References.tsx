import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export function References() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        References
      </Heading>
      <Divider mb="1rem" />
      <Heading fontSize="large" as="h4">
        Professional References
      </Heading>
      <Divider m="0 0 1rem 0" />
      <Text fontSize="medium" fontWeight="bold">
        Adrian Bićanić
      </Text>
      <UnorderedList fontSize="medium" mb="1rem" color={textColor}>
        <ListItem>role: JavaScript Engineer</ListItem>
        <ListItem>company: Infinum</ListItem>
        <ListItem>
          email:{' '}
          <Link href="to:adibicanic@gmail.com" variant="withoutUnderline">
            adibicanic@gmail.com
          </Link>
        </ListItem>
      </UnorderedList>
      <Text fontSize="medium" fontWeight="bold">
        Marija Džaja Sikirić
      </Text>
      <UnorderedList fontSize="medium" color={textColor}>
        <ListItem>role: International relations officer</ListItem>
        <ListItem>company: University of Zadar</ListItem>
        <ListItem>
          email:{' '}
          <Link
            href="to:marija.dzajasikiric@gmail.com"
            variant="withoutUnderline"
          >
            marija.dzajasikiric@gmail.com
          </Link>
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
