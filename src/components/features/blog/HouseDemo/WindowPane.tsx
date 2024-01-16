import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IWindowPaneProps {
  isOpen?: boolean;
}

export function WindowPane({ isOpen = false }: IWindowPaneProps) {
  const windowPaneColor = useColorModeValue("blue.300", "blue.400");
  const windowPaneReflectionColor = useColorModeValue("blue.100", "blue.200");

  return (
    <Box
      className="door-window"
      position={"absolute"}
      h={"100%"}
      border={"1px solid"}
      borderColor={windowPaneColor}
      w={"100%"}
      top={0}
      bgColor={windowPaneColor}
      right={0}
      overflow={"hidden"}
      opacity={0.75}
    >
      <Box
        as={motion.div}
        animate={{ rotate: 45, opacity: !isOpen ? 0.75 : 0 }}
        bgColor={windowPaneReflectionColor}
        h={"200%"}
        rotate={"-60deg"}
        w={"0.3rem"}
        position={"absolute"}
        top={-3}
        bottom={"0%"}
        right={"10%"}
      />

      <Box
        as={motion.div}
        animate={{ rotate: 45, opacity: !isOpen ? 0.75 : 0 }}
        bgColor={windowPaneReflectionColor}
        h={"250%"}
        rotate={"-60deg"}
        w={"0.3rem"}
        position={"absolute"}
        top={-6}
        bottom={"0%"}
        right={"50%"}
      />
    </Box>
  );
}
