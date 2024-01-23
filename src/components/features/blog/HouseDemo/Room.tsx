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

interface IRoomProps extends FlexProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function Room({ layer, children, ...rest }: IRoomProps) {
  const isHTMLOnly = layer === "HTML";
  const [isLightOn, setIsLightOn] = useState(false);
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const [white] = useToken("colors", ["white"]);

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
            // bgColor={isHTMLOnly ? htmlOnlybgColor : "white"}
            p={1}
            mt={5}
            border={isHTMLOnly ? "2px solid" : "1px solid"}
            borderColor={isHTMLOnly ? "gray.900" : "gray.400"}
            boxShadow={!isHTMLOnly ? `inset 0 0 0 4px ${white}` : "unset"}
            bg={
              isHTMLOnly
                ? htmlOnlybgColor
                : isLightOn
                ? "radial-gradient(circle at 50% 32%, #555, #333)"
                : "gray.400"
            }
          >
            {!isHTMLOnly ? <Window layer={layer} windowSide="left" /> : null}
            {!isHTMLOnly ? <Window layer={layer} windowSide="right" /> : null}
          </Grid>
          {!isHTMLOnly ? <Light layer={layer} /> : null}
        </Flex>
      </Flex>
    </Box>
  );
}
