import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { ProjectInfoWrapper } from '../ProjectInfoWrapper/ProjectInfoWrapper';

interface IProjectInfoProps extends BoxProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  link: string;
  src: string;
  alt: string;
}

export function ProjectInfo({
  title,
  shortDescription,
  longDescription,
  link,
  src,
  alt,
  ...restProps
}: IProjectInfoProps) {
  const textColor = useColorModeValue('gray.200', 'gray.50');
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      right="0"
      opacity="0"
      textAlign="center"
      color={textColor}
      transform="translateY(-50%)"
      transition="opacity 300ms cubic-bezier(0.2, 1, 0.3, 1), transform 300ms cubic-bezier(0.2, 1, 0.3, 1)"
      transitionDelay="100ms"
      {...restProps}
    >
      <ProjectInfoWrapper
        title={title}
        shortDescription={shortDescription}
        longDescription={longDescription}
        link={link}
        src={src}
        alt={alt}
      />
    </Box>
  );
}
