import { Box, useColorModeValue } from "@chakra-ui/react";
import { Chimney } from "./Chimney";

interface IHouseRoofProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function HouseRoof({ layer }: IHouseRoofProps) {
  const roofColor = useColorModeValue("red.600", "red.800");
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const isHTMLOnly = layer === "HTML";

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
        borderBottomColor={!isHTMLOnly ? roofColor : htmlOnlybgColor}
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
        left={{ base: "-4px", md: "-3.5px" }}
        zIndex={-1}
      />
      <Chimney layer={layer} />
    </Box>
  );
}
