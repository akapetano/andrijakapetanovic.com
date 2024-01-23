import { Flex } from "@chakra-ui/react";
import { Room } from "./Room";

interface IFirstFloorProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function FirstFloor({ layer }: IFirstFloorProps) {
  return (
    <Flex
      className="first-floor"
      h={{ base: "8rem", md: "10rem" }}
      w={"full"}
      justifyContent={"space-between"}
    >
      <Flex
        className="left-side"
        h={{ base: "8rem", md: "10rem" }}
        w={"100%"}
        justifyContent={"center"}
      >
        <Room layer={layer} />
      </Flex>
      <Flex
        className="right-side"
        h={{ base: "8rem", md: "10rem" }}
        w={"100%"}
        justifyContent={"center"}
      >
        <Room layer={layer} />
      </Flex>
    </Flex>
  );
}
