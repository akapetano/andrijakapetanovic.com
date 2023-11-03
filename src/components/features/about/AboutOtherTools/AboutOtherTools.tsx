"use client";

import { Grid, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import {
  FaLinux,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaBitbucket,
  FaInvision,
} from "react-icons/fa";
import { TouchFriendlyTooltip } from "../../../core/TouchFriendlyTooltip/TouchFriendlyTooltip";

export function AboutOtherTools() {
  // const figmaColor = useColorModeValue("gray.700", "gray.100");
  // const linuxAndGithubColor = useColorModeValue("#000", "gray.100");

  const FRONTEND_TOOLBOX = [
    { toolName: "Git", toolIcon: FaGitAlt, toolColor: "#f05033" },
    { toolName: "GitHub", toolIcon: FaGithub, toolColor: "#000" },
    { toolName: "Bitbucket", toolIcon: FaBitbucket, toolColor: "#2684ff" },
    { toolName: "Linux", toolIcon: FaLinux, toolColor: "#000" },
    { toolName: "Figma", toolIcon: FaFigma, toolColor: "gray.700" },
    { toolName: "InVision", toolIcon: FaInvision, toolColor: "#ff3366" },
  ];

  return (
    <Box>
      <Heading as="h3" fontSize="lg">
        Other
      </Heading>
      <Grid
        templateColumns={[
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(8, 1fr)",
          "repeat(8, 1fr)",
          "repeat(8, 1fr)",
        ]}
        m="1rem 0"
        gap="2rem"
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
