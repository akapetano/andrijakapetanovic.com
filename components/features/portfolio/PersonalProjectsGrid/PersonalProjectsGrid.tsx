import { Grid } from '@chakra-ui/react';
import { Project } from '../Project/Project';

export function PersonalProjectsGrid() {
  return (
    <Grid gridColumn="1" gap={0} mb="2rem" boxShadow="md">
      <Project
        src="/images/projects/crypton.webp"
        alt="Crypton - cryptocurrency Portfolio app"
        title="Crypton"
        description="Coming soon..."
      />
    </Grid>
  );
}
