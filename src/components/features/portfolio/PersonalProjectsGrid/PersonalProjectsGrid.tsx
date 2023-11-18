"use client";

import { Grid } from "@chakra-ui/react";
import { Project } from "../Project/Project";
import { personalProjectData } from "../../../../constants/projectData";

export function PersonalProjectsGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 0,
        marginBottom: "2rem",
        boxShadow: "5px 10px #888888",
      }}
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
    </section>
  );
}
