import {
  useColorMode,
  useColorModeValue,
  Flex,
  Button,
} from '@chakra-ui/react';
import { MoonIconInColor } from '../MoonIconInColor/MoonIconInColor';
import { SunIconInColor } from '../SunIconInColor/SunIconInColor';

export function MobileColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIconInColor, MoonIconInColor);
  const buttonOutlineColor = useColorModeValue('brand.600', 'brand.300');
  const buttonHoverOutlineColor = useColorModeValue('brand.700', 'brand.200');
  const isDark = colorMode === 'dark';

  return (
    <Flex align="center" justify="center">
      <Button
        aria-label="Color mode"
        zIndex="2"
        onClick={toggleColorMode}
        size="md"
        overflow="hidden"
        variant="ghost"
        opacity="0.8"
        outlineColor={buttonOutlineColor}
        _hover={{
          color: buttonHoverOutlineColor,
          outlineColor: buttonHoverOutlineColor,
          opacity: '1',
        }}
        transitionDelay=".3s"
        fontWeight="300"
        leftIcon={<SwitchIcon />}
        rounded="full"
        color={buttonOutlineColor}
      >
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </Button>
    </Flex>
  );
}
