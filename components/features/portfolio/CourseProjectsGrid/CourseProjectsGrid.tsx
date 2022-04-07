import { Box, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { Project } from '../Project/Project';
import { courseProjectData } from '../projectData/projectData';

export function CourseProjectsGrid() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Text color={textColor} mb="0.5rem">
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
        {courseProjectData.map(
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
    </Box>
  );
}
