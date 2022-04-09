import { Stack } from '@chakra-ui/react';
import { ActionButton } from '../../../core/ActionButton/ActionButton';

export function HomeActionButtons() {
  return (
    <Stack
      align="center"
      direction={['column', 'column', 'row', 'row']}
      mb={['0', '0', '0', '4rem']}
    >
      <ActionButton href="/about" btnVariant="primary" text="Learn More" />
      <ActionButton
        href="mailto:andrija.kapetanovic@gmail.com"
        btnVariant="primaryGhost"
        text="Get in contact"
      />
    </Stack>
  );
}
