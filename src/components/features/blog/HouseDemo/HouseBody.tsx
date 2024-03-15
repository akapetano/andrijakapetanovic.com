import { Window } from "./Window";
import { Door } from "./Door";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { Room } from "./Room";
import { GroundFloor } from "./GroundFloor";
import { FirstFloor } from "./FirstFloor";

interface IHouseBodyProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function HouseBody({ layer }: IHouseBodyProps) {
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const houseColor = useColorModeValue("yellow.200", "yellow.300");
  const isHTMLOnly = layer === "HTML";

  return (
    <Flex
      role="main"
      borderInline={"2px solid"}
      borderTop={"2px solid"}
      borderColor={"gray.900"}
      bgColor={!isHTMLOnly ? houseColor : htmlOnlybgColor}
    >
      <Container
        p="unset"
        maxW={{ base: "320px", md: "none" }}
        h={{ base: "16rem", md: "20rem" }}
        w={{ base: "16rem", md: "33rem" }}
        flexDirection={"column"}
      >
        <FirstFloor layer={layer} />
        <GroundFloor layer={layer} />
      </Container>
    </Flex>
  );
}
