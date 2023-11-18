"use client";

import { useColorModeValue, Grid, Heading, Box, Text } from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiChakraui,
  SiTypescript,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { TouchFriendlyTooltip } from "../../../core/TouchFriendlyTooltip/TouchFriendlyTooltip";

export function AboutFrontendToolbox() {
  // const textColor = useColorModeValue("gray.600", "gray.300");
  // const jsColor = useColorModeValue("#f7c427", "#f7df1e");
  // const nextJsColor = useColorModeValue("#000", "gray.100");
  // const vueJsColor = useColorModeValue("#35495e", "#42b883");
  // const nuxtJsColor = useColorModeValue("#04dc82", "#81edc0");

  const FRONTEND_TOOLBOX = [
    { toolName: "HTML5", toolIcon: FaHtml5, toolColor: "#E34C26" },
    { toolName: "CSS3", toolIcon: FaCss3Alt, toolColor: "#167dbe" },
    { toolName: "Sass", toolIcon: FaSass, toolColor: "#ce679a" },
    { toolName: "JavaScript", toolIcon: FaJsSquare, toolColor: "#f7c427" },
    { toolName: "React", toolIcon: FaReact, toolColor: "#5ed3f3" },
    { toolName: "TypeScript", toolIcon: SiTypescript, toolColor: "#3178c6" },
    { toolName: "Next.js", toolIcon: SiNextdotjs, toolColor: "#000" },
    { toolName: "Vuejs", toolIcon: FaVuejs, toolColor: "#35495e" },
    { toolName: "Nuxtjs", toolIcon: SiNuxtdotjs, toolColor: "#04dc82" },
    { toolName: "Chakra UI", toolIcon: SiChakraui, toolColor: "#2cc6b8" },
    {
      toolName: "Tailwind CSS",
      toolIcon: SiTailwindcss,
      toolColor: "#38bdf8",
    },
    {
      toolName: "WordPress",
      toolIcon: SiWordpress,
      toolColor: "#406d80",
    },
  ];

  return (
    <Box mb="1rem">
      <Heading as="h3" fontSize="lg" mb="0.5rem">
        Front-end toolbox
      </Heading>
      <Text fontSize="smaller" color={"gray.600"}>
        These are the tools that I use in my day-to-day work.
      </Text>
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
        {FRONTEND_TOOLBOX.map((tool) => (
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
