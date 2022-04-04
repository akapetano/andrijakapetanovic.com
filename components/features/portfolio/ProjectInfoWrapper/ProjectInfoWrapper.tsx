import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { ProjectDescription } from '../ProjectDescription/ProjectDescription';
import { ProjectInfoModal } from '../ProjectInfoModal/ProjectInfoModal';
import { ProjectTitle } from '../ProjectTitle/ProjectTitle';

interface IProjectInfoWrapperProps extends BoxProps {
  title: string;
  description: string;
}

export function ProjectInfoWrapper({
  title,
  description,
}: IProjectInfoWrapperProps) {
  const textColor = useColorModeValue('whiteAlpha.900', 'gray.800');

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
      color={textColor}
    >
      <ProjectTitle title={title} />
      <ProjectDescription description={description} />
      <ProjectInfoModal title={title} />
    </Box>
  );
}
