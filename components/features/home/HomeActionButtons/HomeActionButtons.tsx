import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ActionButton } from "../../../core/ActionButton/ActionButton";

export function HomeActionButtons() {
  const router = useRouter();
  return (
    <Stack
      align="center"
      direction={["column", "column", "row", "row", "row"]}
      mb={["0", "0", "0", "4rem", "4rem"]}
    >
      <ActionButton href="/about" btnVariant="primary" text="Learn More" />
      <ActionButton
        href="/contact"
        btnVariant="primaryGhost"
        text="Get in contact"
      />
    </Stack>
  );
}
