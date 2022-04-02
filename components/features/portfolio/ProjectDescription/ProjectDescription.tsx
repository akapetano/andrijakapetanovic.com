import { Text, TextProps } from '@chakra-ui/react';

interface IProjectDescriptionProps extends TextProps {
  description: string;
}

export function ProjectDescription({ description }: IProjectDescriptionProps) {
  return (
    <Text textTransform="uppercase" fontSize="md" opacity="0.7" margin="0">
      {description}
    </Text>
  );
}
