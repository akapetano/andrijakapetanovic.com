"use client";

import { Box, Flex, Grid, GridItem, Tooltip } from "@chakra-ui/react";
import { WindowPane } from "./WindowPane";
import { BellIcon } from "@chakra-ui/icons";

export function Door() {
  function handleDoorbellClick() {
    console.log("Ding Dong!");
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      className="door"
      backgroundColor={"white"}
      h={"50%"}
      w={{ base: "18%", md: "10%" }}
      border={"1px solid"}
      borderColor="gray.400"
      position={"relative"}
    >
      <Grid
        gridTemplateRows={"repeat(5,1fr)"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        h={"full"}
        w={"full"}
        gap={{ base: 0.5, md: 1 }}
        p={1}
      >
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>

        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>

        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>

        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
        <GridItem
          className="door-window"
          bgColor={"blue.300"}
          overflow={"hidden"}
          position={"relative"}
        >
          <WindowPane />
        </GridItem>
      </Grid>
      <Box
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
      </Box>

      <Tooltip
        label={"Ding dong!"}
        aria-label="A doorbell"
        hasArrow
        placement="top"
      >
        <Flex
          aria-label="doorbell"
          as={"button"}
          cursor={"pointer"}
          justifyContent={"center"}
          alignItems={"center"}
          width={3}
          height={3}
          position={"absolute"}
          right={{ base: "-40%", md: "-30%" }}
          bgColor={"white"}
          border={"1px solid"}
          borderColor={"gray.400"}
          rounded={"none"}
          onClick={handleDoorbellClick}
        >
          <BellIcon
            width={2}
            height={2}
            border={"1px solid"}
            borderColor={"gray.400"}
            color={"gray.700"}
          />
        </Flex>
      </Tooltip>
    </Flex>
  );
}
