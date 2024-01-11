"use client";

import { Box, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { Chimney } from "./Chimney";
import { motion } from "framer-motion";
import { useState } from "react";
import { WindowPane } from "./WindowPane";
import { Window } from "./Window";
import { Door } from "./Door";

function House() {
  const [hasCss, setHasCss] = useState(false);
  const roofColor = useColorModeValue("red.600", "red.800");
  const houseColor = useColorModeValue("yellow.200", "yellow.100");

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
            borderBottomColor={roofColor}
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
              {/* <Box h={{ base: "8rem", md: "10rem" }} w="20%"></Box>
              <Box h={{ base: "8rem", md: "10rem" }} w="40%"></Box> */}
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
      </Flex>
    </Flex>
    // </Flex>
  );
}

export default House;
