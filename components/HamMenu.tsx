import {
  VStack,
  Menu,
  MenuButton,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavItems from './NavItems';

export default function HamMenu({ items }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        pos="relative"
        mt={'0.5rem'}
        icon={
          !isOpen ? (
            <HamburgerIcon boxSize="5" />
          ) : (
            <CloseIcon color="gray.900" />
          )
        }
        variant=""
        onClick={!isOpen ? onOpen : onClose}
        zIndex="9000"
      />
      {isOpen ? (
        <VStack
          bg="rgba(0,0,0,0.65)"
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
          transition="all 1s ease-in-out"
        >
          <NavItems fontSize={'lg'} p="1rem" />
        </VStack>
      ) : null}
    </Menu>
  );
}
