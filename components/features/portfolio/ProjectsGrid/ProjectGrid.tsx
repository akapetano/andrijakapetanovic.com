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
        <Project />
        <GridItem w="100%" h="200" bg="brand.200" />
        <GridItem w="100%" h="200" bg="brand.300" />
        <GridItem w="100%" h="200" bg="brand.400" />
        <GridItem w="100%" h="200" bg="brand.500" />
        <GridItem w="100%" h="200" bg="brand.600" />
      </Grid>
    </Container>
  );
}
