import { Grid } from '@chakra-ui/react';
import { Project } from '../Project/Project';

export function CourseProjectsGrid() {
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
      ]}
      gap={0}
      mb="2rem"
      boxShadow="md"
    >
      <Project
        src="/images/projects/omnifood.webp"
        alt="Omnifood - AI-powered food subscription website"
        title="Omnifood"
        description="Food subscription website"
      />
      <Project
        src="/images/projects/forkify.webp"
        alt="Forkify - recipe application with custom recipe uploads"
        title="Forkify"
        description="Recipe application"
      />
      <Project
        src="/images/projects/natours.webp"
        alt="Natours - A tour booking website "
        title="Natours"
        description="Tour booking website "
      />
      <Project
        src="/images/projects/trillo.webp"
        alt="Trillo - All-in-one booking app"
        title="Trillo"
        description="All-in-one Booking application"
      />
      <Project
        src="/images/projects/nexter.webp"
        alt="Nexter - Luxury homes website"
        title="Nexter"
        description="Luxury homes website"
      />
      <Project
        src="/images/projects/moshify.webp"
        alt="Moshify - Completely responsive website"
        title="Moshify"
        description="First completely responsive website"
      />
    </Grid>
  );
}
