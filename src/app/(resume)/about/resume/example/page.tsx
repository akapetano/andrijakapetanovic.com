"use client";

import { Container } from "@chakra-ui/react";
import { ResumeHeader } from "@/app/(marketing)/about/resume/ResumeComponent/ResumeHeader";
import { AboutMe } from "@/app/(marketing)/about/resume/ResumeComponent/AboutMe";
export default function ResumeExample() {
  return (
    <Container maxW="2480px">
      <ResumeHeader />
      <AboutMe />
    </Container>
  );
}
