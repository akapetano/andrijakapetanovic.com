import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface IActionButton {
  href: string;
  btnVariant: string;
  text: string;
}

export function ActionButton({ href, btnVariant, text }: IActionButton) {
  return (
    <Link
      as={NextLink}
      href={href}
      variant="withoutUnderline"
      _before={{ content: "none" }}
    >
      <Button
        width={["80vw", "100%", "100%", "100%", "100%"]}
        variant={btnVariant}
      >
        {text}
      </Button>
    </Link>
  );
}
