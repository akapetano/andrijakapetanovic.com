import { Flex } from "@chakra-ui/react";
import { Room } from "./Room";
import { Door } from "./Door";

interface IGroundFloorProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function GroundFloor({ layer }: IGroundFloorProps) {
  return (
    <Flex
      as={"section"}
      className="ground-floor"
      justifyContent="space-between"
      alignItems={"flex-end"}
      h={{ base: "8rem", md: "10rem" }}
      w={"full"}
    >
      <Flex
        className="left-side"
        h={"10rem"}
        w={{ base: "50%", md: "40%" }}
        justifyContent={"center"}
      >
        <Room layer={layer} />
      </Flex>

      <Door layer={layer} />

      <Flex
        className="right-side"
        h={"10rem"}
        w={{ base: "50%", md: "40%" }}
        justifyContent={"center"}
      >
        <Room layer={layer} />
      </Flex>
    </Flex>
  );
}
