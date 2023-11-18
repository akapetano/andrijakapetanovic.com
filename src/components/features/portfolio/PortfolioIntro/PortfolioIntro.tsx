import { Text, Heading, useColorModeValue, Box } from "@chakra-ui/react";

export function PortfolioIntro() {
  // const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box mb="0.5rem">
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0">
        Portfolio
      </Heading>
      <Text color={"gray.600"}>Check out some of my projects...</Text>
    </Box>
  );
}
