import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Logo() {
  return (
    <ChakraLink
      as={Link}
      href="/"
      fontSize={["lg", "lg", "lg", "xl", "xl"]}
      _hover={{ textDecoration: "none" }}
    >
      Andrija Kapetanović
    </ChakraLink>
  );
}
