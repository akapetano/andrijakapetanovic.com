import { Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface IActionButton {
  href: string;
  btnVariant: string;
  text: string;
}

export function ActionButton({ href, btnVariant, text }: IActionButton) {
  return (
    <ChakraLink
      as={Link}
      href={href}
      textDecoration="none"
      _before={{ content: "none" }}
      width={["80vw", "90vw", "100%", "100%", "100%"]}
    >
      <Button width="100%" variant={btnVariant}>
        {text}
      </Button>
    </ChakraLink>
  );
}
