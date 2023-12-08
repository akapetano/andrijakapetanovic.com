"use client";

import { Grid, useColorModeValue } from "@chakra-ui/react";
import { Project } from "../Project/Project";
import { personalProjectData } from "../../../../constants/projectData";

export function PersonalProjectsGrid() {
  const boxShadow = useColorModeValue(
    "5px 5px 10px rgba(0, 0, 0, 0.3)",
    "5px 5px 10px rgba(255, 255, 255, 0.3)"
  );

  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={0}
      marginBottom="2rem"
      boxShadow={boxShadow}
    >
      {personalProjectData.map(
        ({ title, shortDescription, longDescription, imgSrc, alt, link }) => (
          <Project
            key={title}
            src={imgSrc}
            alt={alt}
            title={title}
            shortDescription={shortDescription}
            longDescription={longDescription}
            link={link}
          />
        )
      )}
    </Grid>
  );
}
