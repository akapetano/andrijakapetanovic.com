import { BoxProps } from "@chakra-ui/react";
import { ProjectInfoWrapper } from "../ProjectInfoWrapper/ProjectInfoWrapper";
import { ProjectDescription } from "../ProjectDescription/ProjectDescription";
import { ProjectInfoModal } from "../ProjectInfoModal/ProjectInfoModal";
import { ProjectTitle } from "../ProjectTitle/ProjectTitle";

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
  return (
    <ProjectInfoWrapper
      title={title}
      shortDescription={shortDescription}
      longDescription={longDescription}
      link={link}
      src={src}
      alt={alt}
      {...restProps}
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
    </ProjectInfoWrapper>
  );
}
