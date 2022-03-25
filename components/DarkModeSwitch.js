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
    <Flex>
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
          />
        ) : null}
        <Switch
          colorScheme={switchColorScheme}
          position="absolute"
          zIndex="2"
          onChange={toggleColorMode}
        />
        {!isDark ? (
          <SunIcon
            position="relative"
            w="3"
            h="3"
            top="4px"
            left="22px"
            zIndex="2"
            color={iconsColor}
          />
        ) : null}
      </Flex>
    </Flex>
  );
}
