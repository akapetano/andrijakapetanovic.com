import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { ProjectDescription } from '../ProjectDescription/ProjectDescription';
import { ProjectInfoModal } from '../ProjectInfoModal/ProjectInfoModal';
import { ProjectTitle } from '../ProjectTitle/ProjectTitle';

interface IProjectInfoWrapperProps extends BoxProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  link: string;
  src: string;
  alt: string;
}

export function ProjectInfoWrapper({
  title,
  shortDescription,
  longDescription,
  link,
  src,
  alt,
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
      <ProjectDescription shortDescription={shortDescription} />
      <ProjectInfoModal
        title={title}
        longDescription={longDescription}
        link={link}
        src={src}
        alt={alt}
      />
    </Box>
  );
}
