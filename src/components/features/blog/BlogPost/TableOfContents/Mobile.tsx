import {
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useColorModeValue,
  DrawerHeader,
} from "@chakra-ui/react";
import { Tablets } from "./Tablets";
import { Headings } from "./Headings";
import { Heading } from "@/types/blog";
import { useRef } from "react";

interface IDesktopProps {
  headings?: Heading[];
}

export function Mobile({ headings }: IDesktopProps) {
  const closeBtnColor = useColorModeValue("brand.600", "brand.300");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const triggerRef = useRef(null);

  return (
    <>
      {!isOpen ? (
        <Box
          ref={triggerRef}
          display={{ base: "block", lg: "none" }}
          position="fixed"
          top="calc(100% - 10rem)"
          right="calc(50% - 1.3rem)"
          zIndex="8998"
          onClick={onOpen}
        >
          <Tablets headings={headings} />
        </Box>
      ) : null}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={triggerRef}
      >
        <DrawerOverlay />
        <DrawerContent roundedTop="xl">
          <DrawerCloseButton color={closeBtnColor} marginRight="-0.25rem" />

          <DrawerHeader borderBottomWidth="1px" p="1rem" fontSize="lg">
            Table Of Contents
          </DrawerHeader>
          <DrawerBody p="1rem">
            <Headings display="block" headings={headings} onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
