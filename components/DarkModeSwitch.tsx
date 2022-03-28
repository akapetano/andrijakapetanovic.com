import {
  useColorMode,
  useColorModeValue,
  Switch,
  Flex,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const switchColorScheme = useColorModeValue('brand.500', 'brand.700');
  const iconsColor = useColorModeValue('brand.500', 'icons.moon');
  const isDark = colorMode === 'dark';

  return (
    <Flex p={['0 1rem', '0 1rem', '0', '0']}>
      <Flex>
        {isDark ? (
          <MoonIcon
            position="relative"
            w="3"
            h="3"
            top="5px"
            left="3px"
            zIndex="3"
            color={iconsColor}
            pointerEvents="none"
          />
        ) : null}
        <Switch
          colorScheme={switchColorScheme}
          position="absolute"
          zIndex="2"
          onChange={toggleColorMode}
          size="md"
        />
        {!isDark ? (
          <SunIcon
            position="relative"
            w="3"
            h="3"
            top="4px"
            left="23px"
            zIndex="3"
            color={iconsColor}
            pointerEvents="none"
          />
        ) : null}
      </Flex>
    </Flex>
  );
}
