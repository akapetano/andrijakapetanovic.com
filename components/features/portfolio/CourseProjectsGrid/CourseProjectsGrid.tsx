import { Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { Project } from '../Project/Project';

export function CourseProjectsGrid() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <>
      <Text color={textColor}>
        And some of the projects I&apos;ve built as part of courses...
      </Text>
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
          shortDescription="Food subscription website"
          longDescription='Omnifood is an AI-powered food subscription website built as part of the course "Build Responsive Real-World Websites With HTML and CSS" by Jonas Schmedtmann.'
          link="https://omnifood-andrija.netlify.app/"
        />
        <Project
          src="/images/projects/forkify.webp"
          alt="Forkify - recipe application with custom recipe uploads"
          title="Forkify"
          shortDescription="Recipe application"
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
    </>
  );
}
