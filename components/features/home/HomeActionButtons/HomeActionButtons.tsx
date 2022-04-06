import { Button, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';

export function HomeActionButtons() {
  return (
    <Stack align="center" direction={['column', 'column', 'row', 'row']}>
      <NextLink href="/about" passHref>
        <Link variant="withoutUnderline" _before={{ content: 'none' }}>
          <Button width={['90vw', '100%', '100%', '100%']} variant="primary">
            Learn More
          </Button>
        </Link>
      </NextLink>
      <NextLink href="/about" passHref>
        <Link variant="withoutUnderline" _before={{ content: 'none' }}>
          <Button width={['90vw', '100%', '100%']} variant="primaryGhost">
            Get in contact
          </Button>
        </Link>
      </NextLink>
    </Stack>
  );
}
