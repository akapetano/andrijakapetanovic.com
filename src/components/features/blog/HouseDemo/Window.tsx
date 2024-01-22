"use client";

import { Flex, Grid, GridItem, useColorModeValue, Box } from "@chakra-ui/react";
import { WindowPane } from "./WindowPane";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Room } from "./Room";

interface IWindowProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function Window({ layer }: IWindowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  const isHTMLOnly = layer === "HTML";
  const isFullHouse = layer === "HTML, CSS & JavaScript";

  function toggleWindows() {
    if (isFullHouse) {
      setIsOpen(!isOpen);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (!isFullHouse && isHTMLOnly) {
      setIsOpen(false);
    }
  }, [isFullHouse, isHTMLOnly]);

  return (
    <Box
      h={"50%"}
      w={"50%"}
      position={"relative"}
      cursor={isFullHouse ? "pointer" : "default"}
      onClick={toggleWindows}
    >
      <Grid
        position={"absolute"}
        h={"100%"}
        w={"100%"}
        gridTemplateColumns={"repeat(2, 1fr)"}
        gridTemplateRows={"repeat(1, 1fr)"}
        gap={1}
        bgColor={isHTMLOnly ? htmlOnlybgColor : "white"}
        p={1}
        mt={5}
        border={isHTMLOnly ? "2px solid" : "1px solid"}
        borderColor={isHTMLOnly ? "gray.900" : "gray.400"}
      >
        {!isHTMLOnly ? (
          <GridItem
            as={motion.div}
            initial={false}
            position={"relative"}
            transformOrigin={"0% 0%"}
            borderWidth={{ base: "4px", md: "8px" }}
            style={{
              border: "solid #fff",
              boxShadow: "0 0 0 1px hsl(0, 0%, 70%)",
            }}
            animate={{
              rotateY: isOpen ? -180 : 0,
            }}
          >
            <WindowPane isOpen={isOpen} />
          </GridItem>
        ) : null}
        {!isHTMLOnly ? (
          <GridItem
            as={motion.div}
            transformOrigin={"100% 0%"}
            borderWidth={{ base: "4px", md: "8px" }}
            style={{
              position: "relative",
              border: "solid #fff",
              boxShadow: "0 0 0 1px hsl(0, 0%, 70%)",
            }}
            animate={{
              rotateY: isOpen ? 180 : 0,
            }}
          >
            <WindowPane isOpen={isOpen} />
          </GridItem>
        ) : null}
      </Grid>
      <Room
        position={"absolute"}
        top={"30%"}
        right={"3.5%"}
        h={"90%"}
        w={"93%"}
        border="1px solid"
        borderColor={"gray.400"}
        backgroundColor={"red.500"}
        justifyContent={"center"}
        alignItems={"center"}
      />
      {/* <Box
          className="bulb"
          position={"relative"}
          w="10px"
          h="10px"
          bg={"gray.500"}
          rounded={"50%"}
          mt={"-20px"}
          _before={{
            content: '""',
            width: "2px",
            height: "30px",
            position: "absolute",
            top: "-27px",
            left: "40%",
            bg: "gray.500",
            borderTop: "25px solid #000",
            borderRadius: "10px",
          }}
        ></Box>
      </Room> */}
    </Box>
  );
}
