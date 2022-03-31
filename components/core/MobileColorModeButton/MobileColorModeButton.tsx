import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { mode } from '@chakra-ui/theme-tools';

export function MobileColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColorScheme = useColorModeValue('brand.600', 'brand.400');

  const iconsColor = useColorModeValue('brand.500', 'icons.moon');
  const isDark = colorMode === 'dark';

  return (
    <Flex align="center" justify="center">
      <Button
        aria-label="Color mode"
        color={buttonColorScheme}
        zIndex="2"
        onClick={toggleColorMode}
        size="md"
        overflow="hidden"
        variant="outline"
        leftIcon={
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
      >
        Tap here to change the color mode
      </Button>
    </Flex>
  );
}
