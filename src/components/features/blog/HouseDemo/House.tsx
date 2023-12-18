"use client";

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Chimney } from "./Chimney";
import { motion } from "framer-motion";
import { useState } from "react";
import { WindowPane } from "./WindowPane";
import { GroundFloorWindow } from "./GroundFloorWindow";

function House() {
  const [hasCss, setHasCss] = useState(false);

  return (
    // <Flex overflowX={"auto"} justifyContent={"center"} w={"fit-content"} px={5}>
    <Flex justifyContent="center">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={"2rem"}
      >
        <Box position="relative">
          <Box
            className="roof"
            w={0}
            h={0}
            borderInline={{
              base: "9.8rem solid transparent",
              md: "17.6rem solid transparent",
            }}
            borderBottom="12rem solid"
            borderBottomColor={"red.600"}
            zIndex={3}
          />
          <Box
            className="roof-outline"
            position="absolute"
            w={0}
            h={0}
            borderInline={{
              base: "10rem solid transparent",
              md: "17.8rem solid transparent",
            }}
            borderBottom="12.2rem solid"
            borderBottomColor={"gray.900"}
            top={{ base: "-2px", md: "-3px" }}
            left={{ base: "-4px", md: "-4px" }}
            zIndex={-1}
          />
          <Chimney />
        </Box>
        <Flex
          border={"2px solid"}
          borderColor={"gray.900"}
          zIndex={-1}
          bgColor={"yellow.200"}
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
            >
              <Box h={{ base: "8rem", md: "10rem" }} w="40%"></Box>
              <Box h={{ base: "8rem", md: "10rem" }} w="20%"></Box>
              <Box h={{ base: "8rem", md: "10rem" }} w="40%"></Box>
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
                <GroundFloorWindow />
              </Flex>

              <Box
                className="door"
                backgroundColor={"white"}
                h={"50%"}
                w={{ base: "18%", md: "10%" }}
                position={"relative"}
                border={"1px solid"}
                borderColor="gray.400"
              >
                <Box
                  className="door-window"
                  position={"absolute"}
                  h={"30%"}
                  w={"75%"}
                  top="10%"
                  bgColor={"blue.300"}
                  right={1.5}
                  overflow={"hidden"}
                >
                  <WindowPane />
                </Box>
                <Box
                  className="door-knob"
                  rounded="100%"
                  bgColor={"gray.900"}
                  h={"0.5rem"}
                  w={"0.5rem"}
                  position={"absolute"}
                  top={"50%"}
                  right={"10%"}
                >
                  <Box
                    rounded="100%"
                    bgColor={"gray.400"}
                    h={"0.1rem"}
                    w={"0.15rem"}
                    position={"absolute"}
                    top={"47%"}
                    right={"13%"}
                  />
                </Box>
              </Box>

              <Flex
                className="right-side"
                h={"10rem"}
                w={{ base: "50%", md: "40%" }}
                justifyContent={"center"}
              >
                <GroundFloorWindow />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    // </Flex>
  );
}

export default House;
