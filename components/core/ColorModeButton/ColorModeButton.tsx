import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const switchColorScheme = useColorModeValue('brand.500', 'brand.700');
  const iconsColor = useColorModeValue('brand.500', 'icons.moon');
  const isDark = colorMode === 'dark';

  return (
    <Flex align="center" justify="center">
      <IconButton
        isRound
        display={['none', 'none', 'block', 'block']}
        aria-label="Color mode"
        colorScheme={switchColorScheme}
        zIndex="2"
        onClick={toggleColorMode}
        size="md"
        overflow="hidden"
        border={'1px solid gray'}
        icon={
          !isDark ? (
            <SunIcon
              w="3"
              h="3"
              zIndex="3"
              color={iconsColor}
              pointerEvents="none"
            />
          ) : (
            <MoonIcon
              w="3"
              h="3"
              zIndex="3"
              color={iconsColor}
              pointerEvents="none"
            />
          )
        }
      />
    </Flex>
  );
}
