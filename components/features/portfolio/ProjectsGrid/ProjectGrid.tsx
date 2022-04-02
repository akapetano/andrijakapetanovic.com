import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Project } from '../Project/Project';

export function ProjectGrid() {
  return (
    <Container fontSize="1.2rem" lineHeight="1.5" p="1rem">
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ]}
        gap={2}
      >
        <Project
          src="/images/projects/crypton_logo.png"
          alt="Crypton - cryptocurrency Portfolio app"
          title="Crypton"
          description="Coming soon..."
        />
        <Project
          src="/images/projects/crypton_logo.png"
          alt="Crypton - cryptocurrency Portfolio app"
          title="Crypton"
          description="Cryptocurrency App"
        />
      </Grid>
    </Container>
  );
}
