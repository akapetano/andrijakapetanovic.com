import { Flex, Container, Link, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function BackToHome() {
  return (
    <Container lineHeight="1.5" pt="1rem" pb="8rem">
      <Flex justify="center">
        <NextLink passHref href="/">
          <Link
            fontSize="md"
            _hover={{ textDecor: 'none' }}
            _before={{ content: 'none' }}
          >
            <Button
              aria-label="Back to home button"
              leftIcon={
                <ArrowBackIcon _hover={{ transform: 'translateX(-20%)' }} />
              }
              border="2px solid"
              bg="transparent"
              variant="primary"
            >
              Back to home
            </Button>
          </Link>
        </NextLink>
      </Flex>
    </Container>
  );
}
