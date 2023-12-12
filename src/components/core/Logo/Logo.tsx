import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Logo() {
  return (
    <ChakraLink
      variant={"slidingUnderline"}
      as={Link}
      href="/"
      fontSize={["lg", "lg", "lg", "xl", "xl"]}
    >
      Andrija Kapetanović
    </ChakraLink>
  );
}
