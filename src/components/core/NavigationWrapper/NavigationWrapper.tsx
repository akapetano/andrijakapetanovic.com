import { Flex, useColorModeValue, FlexProps } from "@chakra-ui/react";

interface INavigationWrapperProps extends FlexProps {
  children?: React.ReactNode;
}

export default function NavigationWrapper({
  children,
  ...restProps
}: INavigationWrapperProps) {
  const navBoxShadow = useColorModeValue(
    "0 0 4px 0 rgba(0, 0, 0, 0.15)",
    "0 0 4px 0 rgba(255, 255, 255, 0.1)"
  );

  const navBg = useColorModeValue("white", "gray.800");

  return (
    <Flex
      as="header"
      bg={navBg}
      alignItems="center"
      wrap="wrap"
      pos="fixed"
      top="0"
      right="0"
      px={[4, 4, 10, 28, 36]}
      width="100%"
      height="4rem"
      boxShadow={navBoxShadow}
      zIndex="100"
      overflow="hidden"
      {...restProps}
    >
      {children}
    </Flex>
  );
}
