import {
  VStack,
  Menu,
  MenuButton,
  IconButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavItems from '../NavItems/NavItems';
import { MobileColorModeButton } from '../MobileColorModeButton/MobileColorModeButton';

export default function HamMenu() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex display={['flex', 'flex', 'none', 'none']}>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Menu"
          icon={
            !isOpen ? (
              <HamburgerIcon boxSize="5" />
            ) : (
              <CloseIcon color="gray.900" />
            )
          }
          variant=""
          onClick={onToggle}
          display={['flex', 'flex', 'flex', 'flex']}
          zIndex="9000"
        />
        {isOpen ? (
          <VStack
            bg="rgba(255,255,255,0.75)"
            height="100vh"
            width="100vw"
            pos="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            spacing={'1rem'}
            align="center"
            justify="center"
            display={['flex', 'flex', 'flex', 'flex']}
            zIndex="8999"
            transition="all .3s ease-in-out"
          >
            <NavItems fontSize={'lg'} p="1rem" opacity="1" />
            <MobileColorModeButton />
          </VStack>
        ) : null}
      </Menu>
    </Flex>
  );
}
