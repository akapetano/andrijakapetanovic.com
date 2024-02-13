import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
  Flex,
  Link,
  Tooltip,
  Image,
  useColorModeValue,
  HStack,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useState } from "react";

interface IProjectInfoModalProps {
  title: string;
  longDescription: string;
  link: string;
  src: string;
  alt: string;
}

export function ProjectInfoModal({
  title,
  longDescription,
  link,
  src,
  alt,
}: IProjectInfoModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const textColor = useColorModeValue("gray.600", "gray.300");
  const modalCloseButtonColor = useColorModeValue("accent.300", "accent.100");
  const modalCloseButtonHoverColor = useColorModeValue(
    "accent.400",
    "accent.200"
  );
  const isDisabled = link === "" ? true : false;

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleClose() {
    onClose();
    setIsHovered(false);
  }

  return (
    <>
      <Button onClick={onOpen} size="sm" variant="secondary">
        More Info
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display="flex" mx={{ base: "0.5rem", md: 0 }}>
          <ModalHeader fontSize="2xl" p="1rem" py="0.5rem">
            <Flex justifyContent="space-between">
              <Heading as="h3" fontSize="xx-large" m={0}>
                {title}
              </Heading>
              <motion.button
                onClick={handleClose}
                initial={false}
                style={{ paddingInline: "1rem", marginRight: "-1rem" }}
                animate={{
                  rotate: isHovered ? 15 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 10 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Icon
                  color={
                    isHovered
                      ? modalCloseButtonHoverColor
                      : modalCloseButtonColor
                  }
                  as={CloseIcon}
                  width={4}
                  height={4}
                />
              </motion.button>
            </Flex>
          </ModalHeader>
          <Divider alignSelf="center" />
          {isDisabled ? (
            <Image
              display="block"
              alignItems="center"
              justifyContent="center"
              width="auto"
              height="100%"
              lineHeight="0"
              src={src}
              alt={alt}
            />
          ) : (
            <Link
              href={link}
              target="_blank"
              _hover={{ textDecor: "none", _before: { content: "none" } }}
            >
              <Image
                display="block"
                alignItems="center"
                justifyContent="center"
                width="auto"
                height="100%"
                lineHeight="0"
                src={src}
                alt={alt}
              />
            </Link>
          )}
          <Divider alignSelf="center" />
          <ModalBody fontSize="md" px="1rem" py="0.5rem" color={textColor}>
            {longDescription}
          </ModalBody>

          <Divider alignSelf="center" />
          <ModalFooter px="1rem" py="0.5rem">
            <HStack spacing="1rem" width={{ base: "100%", md: "auto" }}>
              <Link
                href={link}
                target="_blank"
                _hover={{ textDecor: "none", _before: { content: "none" } }}
                width="100%"
              >
                <Tooltip
                  hasArrow
                  label={isDisabled ? "Coming soon..." : null}
                  shouldWrapChildren
                >
                  <Button
                    disabled={isDisabled}
                    _before={{ content: "none" }}
                    leftIcon={<ExternalLinkIcon />}
                    variant="secondaryGhost"
                    mt="0.2rem"
                    width="100%"
                  >
                    Website
                  </Button>
                </Tooltip>
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
