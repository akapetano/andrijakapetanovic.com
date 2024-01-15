import { Window } from "./Window";
import { Door } from "./Door";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export function HouseBody() {
  const houseColor = useColorModeValue("yellow.200", "yellow.100");

  return (
    <Flex
      role="main"
      borderInline={"2px solid"}
      borderTop={"2px solid"}
      borderColor={"gray.900"}
      bgColor={houseColor}
    >
      <Flex
        maxW={{ base: "320px", md: "none" }}
        h={{ base: "16rem", md: "20rem" }}
        w={{ base: "16rem", md: "33rem" }}
        flexDirection={"column"}
      >
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
            <Window />
          </Flex>
          <Flex
            className="right-side"
            h={{ base: "8rem", md: "10rem" }}
            w={"100%"}
            justifyContent={"center"}
          >
            <Window />
          </Flex>
        </Flex>
        <Flex
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
            <Window />
          </Flex>

          <Door />

          <Flex
            className="right-side"
            h={"10rem"}
            w={{ base: "50%", md: "40%" }}
            justifyContent={"center"}
          >
            <Window />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
