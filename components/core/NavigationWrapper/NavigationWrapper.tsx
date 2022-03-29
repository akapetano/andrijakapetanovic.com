import { Flex, useColorModeValue } from '@chakra-ui/react';

export default function NavigationWrapper({ children, ...restProps }) {
  const navBoxShadow = useColorModeValue(
    '0 0 4px 0 rgba(0, 0, 0, 0.15)',
    '0 0 4px 0 rgba(255, 255, 255, 0.1)'
  );

  const navBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="header"
      bg={navBg}
      align="center"
      pos="fixed"
      top="0"
      right="0"
      px={4}
      width="100%"
      height={16}
      boxShadow={navBoxShadow}
      zIndex="100"
      {...restProps}
    >
      {children}
    </Flex>
  );
}
