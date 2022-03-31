import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconButtonColorScheme = useColorModeValue('gray.200', 'gray.500');
  const iconButtonHoverColorScheme = useColorModeValue(
    'brand.400',
    'brand.500'
  );
  const iconsColor = useColorModeValue('brand.500', 'icons.moon');
  const isDark = colorMode === 'dark';

  return (
    <Flex align="center" justify="center">
      <IconButton
        isRound
        display={['none', 'none', 'block', 'block']}
        aria-label="Color mode"
        colorScheme={iconButtonColorScheme}
        zIndex="2"
        onClick={toggleColorMode}
        size="md"
        overflow="hidden"
        border="2px solid"
        borderColor={iconButtonColorScheme}
        _hover={{ borderColor: `${iconButtonHoverColorScheme}` }}
        icon={
          !isDark ? (
            <SunIcon
              w="3"
              h="3"
              zIndex="3"
              color={iconsColor}
              pointerEvents="none"
              boxSize="4"
            />
          ) : (
            <MoonIcon
              w="3"
              h="3"
              zIndex="3"
              color={iconsColor}
              pointerEvents="none"
              boxSize="4"
            />
          )
        }
      />
    </Flex>
  );
}
