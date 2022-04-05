import { Grid } from '@chakra-ui/react';
import { Project } from '../Project/Project';
import { personalProjectData } from '../projectData/projectData';

export function PersonalProjectsGrid() {
  return (
    <Grid gridColumn="1" gap={0} mb="2rem" boxShadow="md">
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
