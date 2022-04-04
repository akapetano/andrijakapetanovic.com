import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  Flex,
  Link,
  Tooltip,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

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
  const modalCloseButtonColor = useColorModeValue('accent.300', 'accent.100');
  const modalCloseButtonHoverColor = useColorModeValue(
    'accent.400',
    'accent.200'
  );
  const isDisabled = link === '' ? true : false;

  return (
    <>
      <Button onClick={onOpen} size="sm" variant="secondary">
        More Info
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display="flex">
          <Flex>
            <ModalHeader fontSize="2xl">{title}</ModalHeader>
            <ModalCloseButton
              size="lg"
              color={modalCloseButtonColor}
              transition="all .3s ease-in-out"
              _hover={{
                color: modalCloseButtonHoverColor,
                transform: 'scale(1.1)',
              }}
            />
          </Flex>
          <Divider alignSelf="center" w="95%" mb="1rem" />
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
              _hover={{ textDecor: 'none', _before: { content: 'none' } }}
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
          <Divider alignSelf="center" w="95%" mt="1rem" />
          <ModalBody fontSize="md">{longDescription}</ModalBody>

          <Divider alignSelf="center" w="95%" />
          <ModalFooter>
            <Button variant="secondary" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link
              href={link}
              target="_blank"
              _hover={{ textDecor: 'none', _before: { content: 'none' } }}
            >
              <Tooltip
                hasArrow
                label={isDisabled ? 'Coming soon...' : null}
                shouldWrapChildren
              >
                <Button
                  disabled={isDisabled}
                  _before={{ content: 'none' }}
                  leftIcon={<ExternalLinkIcon />}
                  variant="secondaryGhost"
                >
                  Website
                </Button>
              </Tooltip>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
