import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface ILightProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function Light({ layer }: ILightProps) {
  const isHTMLOnly = layer === "HTML";
  const isFullHouse = layer === "HTML, CSS & JavaScript";
  const [isLightOn, setIsLightOn] = useState(false);

  function handleLightToggle() {
    setIsLightOn((currentState) => !currentState);
  }

  function turnOffLight() {
    setIsLightOn(false);
  }

  useEffect(() => {
    if (isLightOn && !isFullHouse) {
      turnOffLight();
    }
  }, [isFullHouse, isLightOn]);

  return (
    <>
      <Box
        className="wire"
        position="absolute"
        left="50%"
        width="1px"
        height="80%"
        top={"1.5rem"}
        bg="black"
        zIndex={3}
      />
      <Flex
        className="light"
        position="relative"
        top="2rem"
        justifyContent="center"
        w="full"
        onClick={handleLightToggle}
        cursor="pointer"
      >
        <Box
          className="bulb"
          position="relative"
          bg={isLightOn ? "white" : "gray.300"}
          w="8px"
          h="8px"
          rounded="full"
          boxShadow={
            isLightOn
              ? "0 20px 20px #fff, 0 40px 40px #fff, 0 60px 60px #fff, 0 80px 80px #fff, 0 100px 100px #fff, 0 120px 120px #fff, 0 140px 140px #fff"
              : "unset"
          }
          _before={{
            content: "''",
            position: "absolute",
            bgColor: "inherit",
            top: "-5px",
            left: "2px",
            width: "4px",
            height: "10px",
            borderTop: "4px solid #000",
            borderRadius: "md",
            zIndex: 3,
          }}
          _after={
            isLightOn
              ? {
                  content: "''",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120px",
                  height: "120px",
                  bg: "white",
                  borderRadius: "50%",
                  zIndex: 2,
                  filter: "blur(40px)",
                }
              : {}
          }
          zIndex={2}
        />
      </Flex>
    </>
  );
}
