import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { ProjectTextWrapper } from '../ProjectTextWrapper/ProjectTextWrapper';

interface IProjectTextProps extends BoxProps {
  title: string;
  description: string;
}

export function ProjectText({ title, description }: IProjectTextProps) {
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
      transition="opacity 400ms cubic-bezier(0.2, 1, 0.3, 1), transform 400ms cubic-bezier(0.2, 1, 0.3, 1)"
      transitionDelay="300ms"
      _hover={{ opacity: '1', transform: 'translateY(0)', zIndex: '10' }}
    >
      <ProjectTextWrapper title={title} description={description} />
    </Box>
  );
}