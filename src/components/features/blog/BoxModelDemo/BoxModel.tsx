import { Box, Flex, Text } from "@chakra-ui/react";

export default function BoxModel() {
  return (
    <Box
      position="relative"
      bgColor="orange.200"
      padding={{ base: "30px", md: "50px" }}
      w={{ base: "100%", md: "50%" }}
      mx={{ base: "unset", md: "auto" }}
      my="1rem"
      justifySelf="center"
    >
      <Text
        position="absolute"
        top={{ base: 1, md: 2 }}
        left={2}
        fontWeight="bold"
        fontSize={{ base: "medium", md: "large" }}
        sx={{ _dark: { color: "gray.700" } }}
      >
        Margin
      </Text>
      <Box
        position="relative"
        bgColor="yellow.300"
        padding={{ base: "30px", md: "50px" }}
        w="100%"
      >
        <Text
          position="absolute"
          top={{ base: 1, md: 2 }}
          left={2}
          fontWeight="bold"
          fontSize={{ base: "medium", md: "large" }}
          sx={{ _dark: { color: "gray.700" } }}
        >
          Border
        </Text>
        <Box
          position="relative"
          bgColor="green.200"
          padding={{ base: "30px", md: "50px" }}
          w="100%"
        >
          <Text
            position="absolute"
            top={{ base: 1, md: 2 }}
            left={2}
            fontWeight="bold"
            fontSize={{ base: "medium", md: "large" }}
            sx={{ _dark: { color: "gray.700" } }}
          >
            Padding
          </Text>
          <Flex
            w="100%"
            bgColor="blue.300"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Text
              fontWeight="bold"
              mt="20px"
              fontSize={{ base: "medium", md: "large" }}
              sx={{
                _dark: { color: "gray.700" },
              }}
            >
              Content
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
