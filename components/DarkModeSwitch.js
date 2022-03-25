import {
  useColorMode,
  useColorModeValue,
  Switch,
  Flex,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorScheme = useColorModeValue('brand.500', 'blue.200');
  const isDark = colorMode === 'dark';
  console.log(isDark);

  return (
    <Flex>
      <Flex>
        {!isDark ? (
          <SunIcon
            position="relative"
            w="3"
            h="3"
            top="4px"
            left="3px"
            zIndex="3"
            color="#FCE570"
          />
        ) : null}
        <Switch
          colorScheme={colorScheme}
          position="absolute"
          color="blue"
          zIndex="2"
          onChange={toggleColorMode}
        />
        {isDark ? (
          <MoonIcon
            position="relative"
            w="3"
            h="3"
            top="4px"
            left="22px"
            zIndex="2"
            color="#1a365d"
          />
        ) : null}
      </Flex>
    </Flex>
  );
}
