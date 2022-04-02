import { GridItem, useColorModeValue } from '@chakra-ui/react';

export function Project() {
  return (
    <GridItem
      w="100%"
      h="200"
      bg="brand.100"
      position="relative"
      overflow="hidden"
      _after={{
        content: "''",
        position: 'absolute',
        display: 'block',
        background: 'black',
        opacity: '0.9',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: 'scale(2) translateX(-75%) translateY(-75%) rotate(-28deg)',
        transition: 'transform 3s cubic-bezier(0.2, 1, 0.3, 1)',
      }}
      _hover={{
        _after: {
          transform: 'scale(2) translateX(0) translateY(0) rotate(-28deg)',
        },
      }}
    ></GridItem>
  );
}
