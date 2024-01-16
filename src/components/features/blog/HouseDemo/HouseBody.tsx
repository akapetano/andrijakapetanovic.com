import { Window } from "./Window";
import { Door } from "./Door";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface IHouseBodyProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function HouseBody({ layer }: IHouseBodyProps) {
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const houseColor = useColorModeValue("yellow.200", "yellow.100");
  const isHTMLOnly = layer === "HTML";

  return (
    <Flex
      role="main"
      borderInline={"2px solid"}
      borderTop={"2px solid"}
      borderColor={"gray.900"}
      bgColor={!isHTMLOnly ? houseColor : htmlOnlybgColor}
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
            <Window layer={layer} />
          </Flex>
          <Flex
            className="right-side"
            h={{ base: "8rem", md: "10rem" }}
            w={"100%"}
            justifyContent={"center"}
          >
            <Window layer={layer} />
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
            <Window layer={layer} />
          </Flex>

          <Door layer={layer} />

          <Flex
            className="right-side"
            h={"10rem"}
            w={{ base: "50%", md: "40%" }}
            justifyContent={"center"}
          >
            <Window layer={layer} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
