import { Grid } from '@chakra-ui/react';
import { Project } from '../Project/Project';

export function PersonalProjectsGrid() {
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 0.5fr)',
        'repeat(1, 0.5fr)',
      ]}
      gap={0}
      mb="2rem"
      boxShadow="md"
    >
      <Project
        src="/images/projects/crypton_logo.png"
        alt="Crypton - cryptocurrency Portfolio app"
        title="Crypton"
        description="Coming soon..."
      />
    </Grid>
  );
}
