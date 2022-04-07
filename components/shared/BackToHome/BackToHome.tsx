import { Flex, Container, Link, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function BackToHome() {
  return (
    <Container lineHeight="1.5" pt="2rem" pb={['4rem', '4rem', '6rem', '6rem']}>
      <Flex justify="center">
        <NextLink passHref href="/">
          <Link
            fontSize="md"
            _hover={{ textDecor: 'none' }}
            _before={{ content: 'none' }}
          >
            <Button
              width={['80vw', '100%', '100%', '100%']}
              className="BackToHome"
              aria-label="Back to home button"
              leftIcon={
                <ArrowBackIcon
                  transition="transform .3s ease-in-out"
                  sx={{
                    '.BackToHome: hover &': {
                      transform: 'translateX(-30%) scale(1.1)',
                    },
                  }}
                />
              }
              variant="primaryGhost"
            >
              Back to home
            </Button>
          </Link>
        </NextLink>
      </Flex>
    </Container>
  );
}
