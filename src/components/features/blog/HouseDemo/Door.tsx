"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { GlassPane } from "./GlassPane";
import { BellIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface IDoorProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
}

export function Door({ layer }: IDoorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isHTMLOnly = layer === "HTML";
  const isFullHouse = layer === "HTML, CSS & JavaScript";
  const htmlOnlybgColor = useColorModeValue("white", "gray.200");
  function handleDoorbellClick() {
    if (isFullHouse) {
    } else {
      return null;
    }
  }

  function toggleDoor() {
    if (isFullHouse) {
      setIsOpen(!isOpen);
    } else {
      return;
    }
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      className="door"
      backgroundColor={isHTMLOnly ? htmlOnlybgColor : "white"}
      h={{ base: "60%", md: "70%" }}
      w={{ base: "18%", md: "15%" }}
      border={"2px solid"}
      borderColor={isHTMLOnly ? "gray.900" : "gray.400"}
      pt="0.2rem"
      px="0.2rem"
      zIndex={6}
      position={"relative"}
    >
      {!isHTMLOnly ? (
        <Grid
          as={motion.div}
          initial={false}
          transformOrigin={"0% 0%"}
          style={{ transformStyle: "preserve-3d" }}
          gridTemplateRows={"repeat(5,1fr)"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          h={"full"}
          w={"full"}
          gap={{ base: 0.5, md: 1 }}
          p={1}
          animate={{
            rotateY: isOpen ? -180 : 0,
          }}
          bgColor={"inherit"}
          cursor={isFullHouse ? "pointer" : "default"}
          onClick={toggleDoor}
          position={"relative"}
          border={"2px solid"}
          borderColor="inherit"
        >
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>

          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>

          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>

          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-window"
            bgColor={"blue.300"}
            overflow={"hidden"}
            position={"relative"}
          >
            <GlassPane />
          </GridItem>
          <GridItem
            className="door-knob"
            rounded="100%"
            bgColor={"gray.900"}
            h={"0.5rem"}
            w={"0.5rem"}
            position={"absolute"}
            top={"55%"}
            right={"3%"}
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
          </GridItem>
        </Grid>
      ) : null}

      {isFullHouse ? (
        <Tooltip
          label={"Ding dong!"}
          aria-label="A doorbell"
          hasArrow
          placement="top"
          closeOnScroll
        >
          <Flex
            aria-label="doorbell"
            as={"button"}
            cursor={"pointer"}
            justifyContent={"center"}
            alignItems={"center"}
            width={{ base: 3, md: 5 }}
            height={{ base: 3, md: 5 }}
            position={"absolute"}
            right={{ base: "-40%", md: "-35%" }}
            bgColor={"white"}
            border={"1px solid"}
            borderColor={"gray.400"}
            rounded={"none"}
            onClick={handleDoorbellClick}
          >
            <BellIcon
              width={{ base: 2, md: 3 }}
              height={{ base: 2, md: 3 }}
              border={"1px solid"}
              borderColor={"gray.400"}
              color={"gray.700"}
            />
          </Flex>
        </Tooltip>
      ) : (
        <Flex
          aria-label="doorbell"
          as={"button"}
          cursor={isFullHouse ? "pointer" : "default"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: 3, md: 5 }}
          height={{ base: 3, md: 5 }}
          position={"absolute"}
          right={{ base: "-40%", md: "-35%" }}
          bgColor={isHTMLOnly ? htmlOnlybgColor : "white"}
          border={isHTMLOnly ? "2px solid" : "1px solid"}
          borderColor={isHTMLOnly ? "gray.900" : "gray.400"}
          rounded={"none"}
          onClick={handleDoorbellClick}
        >
          {!isHTMLOnly ? (
            <BellIcon
              width={{ base: 2, md: 3 }}
              height={{ base: 2, md: 3 }}
              border={"1px solid"}
              borderColor={"gray.400"}
              color={"gray.700"}
            />
          ) : null}
        </Flex>
      )}
    </Flex>
  );
}
