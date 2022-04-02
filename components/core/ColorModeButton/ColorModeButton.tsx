import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react';
import { AnimatedMoonIcon } from '../AnimatedMoonIcon/AnimatedMoonIcon';
import { AnimatedSunIcon } from '../AnimatedSunIcon/AnimatedSunIcon';

export function ColorModeButton() {
  const { toggleColorMode } = useColorMode();
  const iconButtonBorderColor = useColorModeValue('gray.200', 'gray.500');
  const iconButtonHoverBorderColor = useColorModeValue(
    'brand.400',
    'brand.500'
  );
  const SwitchIcon = useColorModeValue(AnimatedSunIcon, AnimatedMoonIcon);

  return (
    <Flex>
      <IconButton
        variant="ghost"
        fontSize="2xl"
        isRound
        display={['none', 'none', 'block', 'block']}
        aria-label="Color mode toggler"
        zIndex="2"
        onClick={toggleColorMode}
        size="lg"
        overflow="hidden"
        border="2px solid"
        borderColor={iconButtonBorderColor}
        _hover={{ borderColor: `${iconButtonHoverBorderColor}` }}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
}
