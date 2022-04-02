import {
  VStack,
  Menu,
  MenuButton,
  IconButton,
  useDisclosure,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { MobileColorModeButton } from '../MobileColorModeButton/MobileColorModeButton';
import NavLinks from '../NavLinks/NavLinks';

export default function MobileHamMenu() {
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex display={['flex', 'flex', 'none', 'none']}>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Menu"
          icon={!isOpen ? <HamburgerIcon boxSize="5" /> : <CloseIcon />}
          variant=""
          onClick={onToggle}
          display={['flex', 'flex', 'flex', 'flex']}
          zIndex="9000"
        />
        {isOpen ? (
          <VStack
            bg={bgColor}
            height="100vh"
            width="100vw"
            pos="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            spacing={'3rem'}
            align="center"
            justify="center"
            display={['flex', 'flex', 'flex', 'flex']}
            zIndex="8999"
            transition="all .3s ease-in-out"
          >
            <NavLinks fontSize={'lg'} />
            <MobileColorModeButton />
          </VStack>
        ) : null}
      </Menu>
    </Flex>
  );
}
