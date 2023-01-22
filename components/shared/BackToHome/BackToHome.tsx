import { Flex, Container, Link, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function BackToHome() {
  const router = useRouter();
  return (
    <Container
      lineHeight="1.5"
      pt="2rem"
      pb={["4rem", "4rem", "6rem", "6rem", "6rem"]}
    >
      <Flex justify="center">
        <Button
          className="BackToHome"
          aria-label="Back to home button"
          leftIcon={
            <ArrowBackIcon
              transition="transform .3s ease-in-out"
              sx={{
                ".BackToHome: hover &": {
                  transform: "translateX(-30%) scale(1.1)",
                },
              }}
            />
          }
          variant="primaryGhost"
          onClick={() => router.push("/")}
          w={{ base: "100%", sm: "auto" }}
        >
          Back to home
        </Button>
      </Flex>
    </Container>
  );
}
