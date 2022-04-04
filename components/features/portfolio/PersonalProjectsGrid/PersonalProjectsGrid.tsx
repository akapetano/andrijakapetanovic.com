import { Grid } from '@chakra-ui/react';
import { Project } from '../Project/Project';

export function PersonalProjectsGrid() {
  return (
    <Grid
      autoColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', '0.5fr', '0.5fr']}
      gap={0}
      mb="2rem"
      boxShadow="md"
    >
      <Project
        src="/images/projects/crypton.webp"
        alt="Crypton - cryptocurrency Portfolio app"
        title="Crypton"
        description="Coming soon..."
      />
    </Grid>
  );
}
