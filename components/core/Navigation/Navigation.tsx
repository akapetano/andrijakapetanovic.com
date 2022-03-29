import { Stack, Box, Spacer, Flex } from '@chakra-ui/react';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import { DarkModeSwitch } from '../DarkModeSwitch/DarkModeSwitch';
import HamMenu from '../HamMenu/HamMenu';
import NavItems from '../NavItems/NavItems';
import Logo from '../Logo/Logo';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

export default function Navigation() {
  return (
    <NavigationWrapper>
      <Box flex="2">
        <Logo />
      </Box>

      <Stack
        spacing={8}
        align={'center'}
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['row', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <NavItems fontSize={'sm'} />
        <DarkModeSwitch />
        <HamMenu />
      </Stack>
    </NavigationWrapper>
  );
}
