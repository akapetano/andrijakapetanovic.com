"use client";

import { useColorModeValue, Grid, Heading, Box } from "@chakra-ui/react";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";

import { TouchFriendlyTooltip } from "../../../core/TouchFriendlyTooltip/TouchFriendlyTooltip";

export function AboutBackendToolbox() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const nodeJsColor = useColorModeValue("#006e00", "#58a746");
  const goLangColor = useColorModeValue("#156880", "#017d9c");

  const BACKEND_TOOLBOX = [
    {
      toolName: "Node.js",
      toolIcon: FaNodeJs,
      toolColor: nodeJsColor,
    },
    {
      toolName: "Go",
      toolIcon: BiLogoGoLang,
      toolColor: goLangColor,
    },
  ];

  return (
    <Box mb="1rem" color={textColor}>
      <Heading as="h3" fontSize="lg" mb="0.5rem">
        Back-end toolbox
      </Heading>
      <Grid
        templateColumns={[
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(6, 1fr)",
          "repeat(6, 1fr)",
          "repeat(6, 1fr)",
        ]}
        m="1rem 0"
        gap={["1rem", "1rem", "0.5rem", "0.5rem", "0.5rem"]}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {BACKEND_TOOLBOX.map((tool) => (
          <TouchFriendlyTooltip
            key={tool.toolName}
            toolName={tool.toolName}
            toolIcon={tool.toolIcon}
            toolColor={tool.toolColor}
          />
        ))}
      </Grid>
    </Box>
  );
}
