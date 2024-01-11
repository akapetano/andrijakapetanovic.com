"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import { WindowPane } from "./WindowPane";
import { motion } from "framer-motion";
import { useState } from "react";

export function Window() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleWindows() {
    setIsOpen(!isOpen);
  }

  return (
    <Grid
      h={"50%"}
      w={"50%"}
      gridTemplateColumns={"repeat(2, 1fr)"}
      gridTemplateRows={"repeat(1, 1fr)"}
      gap={1}
      bgColor={"white"}
      p={1}
      mt={5}
      border={"1px solid"}
      borderColor="gray.400"
      cursor={"pointer"}
      onClick={toggleWindows}
    >
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
    </Grid>
  );
}
