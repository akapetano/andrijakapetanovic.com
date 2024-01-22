import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface ILightProps {
  isLightOn: boolean;
  handleLightToggle: () => void;
}

export function Light({ isLightOn, handleLightToggle }: ILightProps) {
  return (
    <>
      <Box
        className="wire"
        position="absolute"
        left="calc(50% - 2px)"
        width="4px"
        height="12vh"
        top={"0"}
        bg="black"
        zIndex={3}
      />
      <Flex
        className="light"
        position="relative"
        top="calc(30% - 5rem)"
        justifyContent="center"
        w="full"
        onClick={handleLightToggle}
        cursor="pointer"
      >
        <Box
          className="bulb"
          position="relative"
          bg={isLightOn ? "white" : "gray.300"}
          w="80px"
          h="80px"
          rounded="full"
          boxShadow={
            isLightOn
              ? "0 0 50px #fff, 0 0 100px #fff, 0 0 150px #fff, 0 0 200px #fff, 0 0 250px #fff, 0 0 300px #fff, 0 0 350px #fff"
              : "unset"
          }
          _before={{
            content: "''",
            position: "absolute",
            bgColor: "inherit",
            top: "-50px",
            left: "22.5px",
            width: "35.5px",
            height: "80px",
            borderTop: "30px solid #000",
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
        >
          <Box
            position={"absolute"}
            top="-16px"
            left="-4px"
            width={"30px"}
            height={"30px"}
            bg="transparent"
            transform="rotate(342deg)"
            borderBottomRightRadius="40px"
            boxShadow={`20px 20px 0 10px ${isLightOn ? "#fff" : "inherit"}`}
            zIndex={2}
          />
          <Box
            position={"absolute"}
            top="-16px"
            right="-4px"
            width={"30px"}
            height={"30px"}
            bg="transparent"
            transform="rotate(18deg)"
            borderBottomLeftRadius="40px"
            boxShadow={`-20px 20px 0 10px ${isLightOn ? "#fff" : "inherit"}`}
            zIndex={2}
          />
        </Box>
      </Flex>
    </>
  );
}
