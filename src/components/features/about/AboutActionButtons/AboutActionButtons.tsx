import { Stack } from "@chakra-ui/react";
import { ActionButton } from "../../../core/ActionButton/ActionButton";

export function AboutActionButtons() {
  return (
    <Stack
      align="center"
      direction={["column", "column", "row", "row", "row"]}
      w={{ base: "100%", sm: "auto" }}
    >
      <ActionButton
        href="/portfolio"
        btnVariant="secondary"
        text="View my work"
      />
      <ActionButton
        href="/about/resume"
        btnVariant="secondaryGhost"
        text="Resume"
      />
    </Stack>
  );
}
