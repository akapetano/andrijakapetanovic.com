import { Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface IActionButton {
  href: string;
  btnVariant: string;
  text: string;
  ariaLabel?: string;
}

export function ActionButton({
  href,
  btnVariant,
  text,
  ariaLabel,
}: IActionButton) {
  return (
    <ChakraLink
      as={Link}
      href={href}
      textDecoration="none"
      _before={{ content: "none" }}
      width="100%"
      aria-label={ariaLabel}
    >
      <Button width="100%" variant={btnVariant}>
        {text}
      </Button>
    </ChakraLink>
  );
}
