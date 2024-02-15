"use client";

import { Container, Box } from "@chakra-ui/react";
import { ResumeHeader } from "../../../../../components/features/about/DownloadableResume/ResumeHeader";
import { AboutMe } from "../../../../../components/features/about/DownloadableResume/AboutMe";
export default function ResumeExample() {
  return (
    <Container maxW="2480px" display="flex" flexDirection="column" gap="0.5rem">
      <ResumeHeader />
      <Box as="main">
        <AboutMe />
      </Box>
    </Container>
  );
}
