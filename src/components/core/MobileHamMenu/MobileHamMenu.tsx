"use client";

import {
  VStack,
  Menu,
  MenuButton,
  IconButton,
  useDisclosure,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { MobileColorModeButton } from "../MobileColorModeButton/MobileColorModeButton";
import NavLinks from "../NavLinks/NavLinks";
import { MenuButtonIcon } from "./MenuButtonIcon/MenuButtonIcon";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileHamMenu() {
  const pathname = usePathname();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const bgColor = useColorModeValue("whiteAlpha.700", "rgba(26,32,44,0.7)");
  const iconColor = useColorModeValue("brand.700", "brand.200");

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <Flex display={["flex", "flex", "none", "none", "none"]}>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Menu"
          icon={
            <MenuButtonIcon
              color={iconColor}
              isOpen={isOpen}
              strokeWidth={2}
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              height="20"
              width="20"
            />
          }
          variant=""
          onClick={onToggle}
          display="flex"
          zIndex="9000"
        />
        {isOpen ? (
          <VStack
            backdropFilter="auto"
            backdropBlur="10px"
            bg={bgColor}
            height="100vh"
            width="100vw"
            pos="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            spacing={"2rem"}
            align="center"
            justify="start"
            pt={"7rem"}
            display="flex"
            zIndex="8999"
            transition="all .3s ease-in-out"
          >
            <NavLinks fontSize="lg" />
            <MobileColorModeButton />
          </VStack>
        ) : null}
      </Menu>
    </Flex>
  );
}
