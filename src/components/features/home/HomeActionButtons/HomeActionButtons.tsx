import { Stack } from "@chakra-ui/react";

import { ActionButton } from "../../../core/ActionButton/ActionButton";

export function HomeActionButtons() {
  return (
    <Stack
      align="center"
      direction={["column", "column", "column", "row", "row"]}
      mb={["0", "0", "0", "4rem", "4rem"]}
      w={{ base: "100%", md: "auto" }}
    >
      <ActionButton
        ariaLabel="Learn More About Andrija Kapetanović"
        href="/about"
        btnVariant="primary"
        text="Learn More"
      />
      <ActionButton
        ariaLabel="Get in contact with Andrija Kapetanović"
        href="/contact"
        btnVariant="primaryGhost"
        text="Get in contact"
      />
    </Stack>
  );
}
