import { Stack, Box, Spacer, Flex } from '@chakra-ui/react';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import { ColorModeButton } from '../ColorModeButton/ColorModeButton';
import MobileHamMenu from '../MobileHamMenu/MobileHamMenu';
import NavItems from '../NavItems/NavItems';
import Logo from '../Logo/Logo';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <Box flex="1">
        <Logo />
      </Box>

      <Stack
        spacing={6}
        align={'center'}
        direction={['row', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        display={['none', 'none', 'flex', 'flex']}
      >
        <NavItems fontSize={'sm'} />
        <ColorModeButton />
      </Stack>
      <MobileHamMenu />
    </NavigationWrapper>
  );
}
