import { Flex, FlexProps } from "@chakra-ui/react";

interface IColorsProps extends FlexProps {
  colors: { id: number; backgroundColor: string; textColor: string }[];
}

export default function Colors({ colors, ...restProps }: IColorsProps) {
  return (
    <Flex gap="2" flexDir={{ base: "column", sm: "row" }} {...restProps}>
      {colors.map(({ backgroundColor, textColor, id }) => (
        <Flex
          key={id}
          w="100%"
          height="6rem"
          style={{ backgroundColor }}
          color={textColor}
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          rounded="lg"
        >
          {backgroundColor}
        </Flex>
      ))}
    </Flex>
  );
}
