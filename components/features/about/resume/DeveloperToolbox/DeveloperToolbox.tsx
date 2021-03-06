import {
  Box,
  Heading,
  Divider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export function DeveloperToolbox() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Developer Toolbox
      </Heading>
      <Divider m="0 0 1rem 0" />
      <Text fontSize="medium" color={textColor}>
        Chakra UI | Next.js | React | TypeScript | JavaScript | CSS/Sass | HTML
        | Git | GitHub | Linux | Node.js
      </Text>
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
