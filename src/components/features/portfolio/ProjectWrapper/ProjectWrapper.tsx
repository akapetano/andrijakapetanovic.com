import { GridItem, useColorModeValue, GridItemProps } from '@chakra-ui/react';

export function ProjectWrapper({ children, ...restProps }: GridItemProps) {
  const overlayColor = useColorModeValue('brand.600', 'brand.200');
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <GridItem
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="200"
      bg={bgColor}
      position="relative"
      overflow="hidden"
      _after={{
        content: "''",
        position: 'absolute',
        display: 'block',
        bg: overlayColor,
        opacity: '0.9',
        top: 0,
        left: 0,
        width: '100%',
        height: '200%',
        transform: 'scale(2) translateX(-75%) translateY(-75%) rotate(-30deg)',
        transition: 'transform 3s cubic-bezier(0.2, 1, 0.3, 1)',
        zIndex: '2',
      }}
      _hover={{
        _after: {
          transform: 'scale(2) translateX(0) translateY(0) rotate(-30deg)',
        },
      }}
      {...restProps}
    >
      {children}
    </GridItem>
  );
}
