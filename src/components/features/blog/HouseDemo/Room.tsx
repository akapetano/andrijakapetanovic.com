import { Flex, Box } from "@chakra-ui/react";
import { Light } from "./Light";
import { useState } from "react";

export function Room({ ...rest }) {
  const [isLightOn, setIsLightOn] = useState(false);

  function handleLightToggle() {
    setIsLightOn((currentState) => !currentState);
  }

  return (
    <Flex {...rest}>
      <Flex className="room" h="100%" w="100%" position="relative">
        <Box
          position={"absolute"}
          w="full"
          h="full"
          bg={
            isLightOn
              ? "radial-gradient(circle at 50% 32%, #555, #111)"
              : "gray.200"
          }
        />
        <Light isLightOn={isLightOn} handleLightToggle={handleLightToggle} />
      </Flex>
    </Flex>
  );
}
