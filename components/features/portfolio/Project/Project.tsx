import { Image } from '@chakra-ui/react';
import { ProjectInfo } from '../ProjectInfo/ProjectInfo';
import { ProjectWrapper } from '../ProjectWrapper/ProjectWrapper';

interface IProjectProps {
  src: string;
  alt: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  link: string;
}

export function Project({
  src,
  alt,
  title,
  shortDescription,
  longDescription,
  link,
}: IProjectProps) {
  return (
    <ProjectWrapper className="project-wrapper">
      <Image
        display="block"
        alignItems="center"
        justifyContent="center"
        width="auto"
        height="100%"
        lineHeight="0"
        src={src}
        alt={alt}
        transform="translateZ(0)"
        transition="transform 750ms cubic-bezier(0.2, 1, 0.3, 1)"
        _before={{
          content: "''",
          display: 'block',
          pt: '75%',
          overflow: 'hidden',
        }}
        sx={{
          '.project-wrapper: hover &': {
            transform: 'scale(1.2)',
          },
        }}
      />
      <ProjectInfo
        title={title}
        shortDescription={shortDescription}
        longDescription={longDescription}
        link={link}
        sx={{
          '.project-wrapper: hover &': {
            opacity: '1',
            transform: 'translateY(0)',
            zIndex: '10',
          },
        }}
      />
    </ProjectWrapper>
  );
}
