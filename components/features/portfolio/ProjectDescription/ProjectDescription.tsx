import { Text, TextProps } from '@chakra-ui/react';

interface IProjectDescriptionProps extends TextProps {
  description: string;
}

export function ProjectDescription({ description }: IProjectDescriptionProps) {
  return (
    <Text textTransform="uppercase" fontSize="md" opacity="0.5" mb="1rem">
      {description}
    </Text>
  );
}
