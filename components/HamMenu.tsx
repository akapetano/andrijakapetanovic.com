import { VStack, Menu, MenuButton, IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function HamMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
        variant=""
        onClick={menuHandler}
      />
      {isOpen ? (
        <VStack
          pos="absolute"
          justify="center"
          spacing={'1rem'}
          align="center"
          display={['none', 'none', 'flex', 'flex']}
        >
          {items.map((navItem: string) => (
            <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
              <Link>{navItem}</Link>
            </NextLink>
          ))}
        </VStack>
      ) : null}
    </Menu>
  );
}
