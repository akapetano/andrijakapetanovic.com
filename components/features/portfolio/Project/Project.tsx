import { Heading, Image, Box, Text } from '@chakra-ui/react';
import { ProjectText } from '../ProjectText/ProjectText';
import { ProjectWrapper } from '../ProjectWrapper/ProjectWrapper';

interface IProjectProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function Project({ src, alt, title, description }: IProjectProps) {
  return (
    <ProjectWrapper>
      <Image
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="auto"
        height="100%"
        lineHeight="0"
        src={src}
        alt={alt}
        rounded="full"
        _hover={{ transform: 'scale(1.2)' }}
      />
      <ProjectText title={title} description={description} />
    </ProjectWrapper>
  );
}
