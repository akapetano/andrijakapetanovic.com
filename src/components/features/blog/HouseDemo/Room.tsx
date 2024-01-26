import {
  Flex,
  Box,
  Grid,
  useColorModeValue,
  useToken,
  FlexProps,
} from "@chakra-ui/react";
import { Light } from "./Light";
import { useState } from "react";
import { Window } from "./Window";
import { ROOM_COLORS } from "@/constants";

interface IRoomProps extends FlexProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
  roomColor?:
    | "cyan"
    | "blue"
    | "pink"
    | "green"
    | "purple"
    | "yellow"
    | "white";
}

export function Room({
  layer,
  children,
  roomColor = "blue",
  ...rest
}: IRoomProps) {
  const isHTMLOnly = layer === "HTML";
  const [isLightOn, setIsLightOn] = useState(false);

  function handleLightToggle() {
    setIsLightOn((currentState) => !currentState);
  }

  function handleTurnOffLight() {
    setIsLightOn(false);
  }
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const [white, gray900, cyan200, cyan300] = useToken("colors", [
    "white",
    "gray.900",
    "cyan.200",
    "cyan.300",
  ]);

  return (
    <Box h={"50%"} w={"50%"} position={"relative"}>
      <Flex {...rest}>
        <Flex className="room" h="100%" w="100%" position="relative">
          <Grid
            position={"absolute"}
            h={"4rem"}
            w={"100%"}
            gridTemplateColumns={"repeat(2, 1fr)"}
            gridTemplateRows={"repeat(1, 1fr)"}
            p={1}
            mt={5}
            border={"2px solid"}
            borderColor={isHTMLOnly ? "gray.900" : "gray.400"}
            boxShadow={
              !isHTMLOnly
                ? `inset 0 0 0 4px ${white}, inset 0 0 0 4.5px ${gray900}`
                : "unset"
            }
            bg={
              isHTMLOnly
                ? htmlOnlybgColor
                : isLightOn
                ? ROOM_COLORS[roomColor][0]
                : ROOM_COLORS[roomColor][1]
            }
            gap="0.05rem"
          >
            {!isHTMLOnly ? (
              <Window layer={layer} windowSide="left" isLightOn={isLightOn} />
            ) : null}
            {!isHTMLOnly ? (
              <Window layer={layer} windowSide="right" isLightOn={isLightOn} />
            ) : null}
          </Grid>
          {!isHTMLOnly ? (
            <Light
              layer={layer}
              isLightOn={isLightOn}
              handleToggleLight={handleLightToggle}
              handleTurnOffLight={handleTurnOffLight}
            />
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
}
