import { Flex } from "@chakra-ui/react";
import { Room } from "./Room";

interface IFirstFloorProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function FirstFloor({ layer }: IFirstFloorProps) {
  return (
    <Flex
      className="first-floor"
      h={{ base: "8rem", md: "9rem" }}
      w={"100%"}
      justifyContent={"space-evenly"}
      gap={{ base: "2.5rem", md: "8.5rem" }}
      mt="1rem"
    >
      <Flex
        className="left-side"
        h={{ base: "8rem", md: "9rem" }}
        w={"100%"}
        justifyContent={"center"}
      >
        <Room layer={layer} roomColor="white" />
      </Flex>
      <Flex
        className="right-side"
        h={{ base: "8rem", md: "9rem" }}
        w={"100%"}
        justifyContent={"center"}
      >
        <Room layer={layer} roomColor="white" />
      </Flex>
    </Flex>
  );
}
