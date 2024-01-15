import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export function HouseWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex justifyContent="center">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={"2rem"}
      >
        {children}
      </Flex>
    </Flex>
  );
}
