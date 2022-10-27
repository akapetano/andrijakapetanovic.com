import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Link
      as={NextLink}
      href="/"
      fontSize={["lg", "lg", "lg", "xl", "xl"]}
      _hover={{ textDecoration: "none" }}
    >
      Andrija Kapetanović
    </Link>
  );
}
