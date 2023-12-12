import { Text, TextProps } from '@chakra-ui/react';

interface IProjectDescriptionProps extends TextProps {
  shortDescription: string;
}

export function ProjectDescription({
  shortDescription,
}: IProjectDescriptionProps) {
  return (
    <Text textTransform="uppercase" fontSize="md" opacity="0.5" mb="1rem">
      {shortDescription}
    </Text>
  );
}
