import { HStack, Box, Spacer, Flex } from '@chakra-ui/react';
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
      <HStack>
        <HStack
          alignItems="center"
          display={['none', 'none', 'flex', 'flex']}
          mr="2rem"
          spacing="2rem"
        >
          <NavItems fontSize={'sm'} />
          <DarkModeSwitch />
        </HStack>
        <HamMenu />
      </HStack>
    </NavigationWrapper>
  );
}
