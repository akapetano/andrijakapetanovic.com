import {
  useColorMode,
  useColorModeValue,
  Flex,
  Button,
} from '@chakra-ui/react';
import { AnimatedMoonIcon } from '../AnimatedMoonIcon/AnimatedMoonIcon';
import { AnimatedSunIcon } from '../AnimatedSunIcon/AnimatedSunIcon';

export function MobileColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(AnimatedSunIcon, AnimatedMoonIcon);
  const buttonOutlineColor = useColorModeValue('brand.600', 'brand.400');
  const buttonHoverOutlineColor = useColorModeValue('brand.700', 'brand.500');
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
        _hover={{ outlineColor: buttonHoverOutlineColor, opacity: '1' }}
        transitionDelay=".3s"
        fontWeight="300"
        leftIcon={<SwitchIcon />}
      >
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </Button>
    </Flex>
  );
}
