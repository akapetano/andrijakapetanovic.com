import { Heading, HeadingProps } from "@chakra-ui/react";

interface IProjectTitleProps extends HeadingProps {
  title: string;
}

export function ProjectTitle({ title }: IProjectTitleProps) {
  return (
    <Heading variant="projectInfo" as="h3" fontSize="2xl" p="0 2rem">
      {title}
    </Heading>
  );
}
