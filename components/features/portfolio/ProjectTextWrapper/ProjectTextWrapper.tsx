import { Box, BoxProps } from '@chakra-ui/react';
import { ProjectDescription } from '../ProjectDescription/ProjectDescription';
import { ProjectTitle } from '../ProjectTitle/ProjectTitle';

interface IProjectTextWrapperProps extends BoxProps {
  title: string;
  description: string;
}

export function ProjectTextWrapper({
  title,
  description,
}: IProjectTextWrapperProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      position="absolute"
      width="100%"
      top="50%"
      transform="translateY(-50%)"
    >
      <ProjectTitle title={title} />
      <ProjectDescription description={description} />
    </Box>
  );
}
