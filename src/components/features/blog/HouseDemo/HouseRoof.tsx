import { Box, useColorModeValue } from "@chakra-ui/react";
import { Chimney } from "./Chimney";

export function HouseRoof() {
  const roofColor = useColorModeValue("red.600", "red.800");

  return (
    <Box as="header" position="relative">
      <Box
        className="roof"
        w={0}
        h={0}
        borderInline={{
          base: "9.8rem solid transparent",
          md: "17.6rem solid transparent",
        }}
        borderBottom="12rem solid"
        borderBottomColor={roofColor}
        zIndex={3}
      />
      <Box
        className="roof-outline"
        position="absolute"
        w={0}
        h={0}
        borderInline={{
          base: "10rem solid transparent",
          md: "17.8rem solid transparent",
        }}
        borderBottom="12.2rem solid"
        borderBottomColor={"gray.900"}
        top={{ base: "-2px", md: "-3px" }}
        left={{ base: "-4px", md: "-4px" }}
        zIndex={-1}
      />
      <Chimney />
    </Box>
  );
}
