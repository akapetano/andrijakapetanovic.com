"use client";

import { Container, Box } from "@chakra-ui/react";
import { ResumeHeader } from "@/app/(marketing)/about/resume/ResumeComponent/ResumeHeader";
import { AboutMe } from "@/app/(marketing)/about/resume/ResumeComponent/AboutMe";
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
