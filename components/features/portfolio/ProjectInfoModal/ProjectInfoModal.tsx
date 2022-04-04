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
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface IProjectInfoModalProps {
  title: string;
  longDescription: string;
  link: string;
}

export function ProjectInfoModal({
  title,
  longDescription,
  link,
}: IProjectInfoModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDisabledButton = link === '' ? true : false;

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
            <ModalCloseButton />
          </Flex>
          <Divider alignSelf="center" w="95%" />
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
              <Button
                disabled={isDisabledButton}
                _before={{ content: 'none' }}
                leftIcon={<ExternalLinkIcon />}
                variant="secondaryGhost"
              >
                Website
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
