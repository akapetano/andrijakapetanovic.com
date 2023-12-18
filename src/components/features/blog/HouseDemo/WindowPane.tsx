import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function WindowPane() {
  return (
    <Box
      className="door-window"
      position={"absolute"}
      h={"100%"}
      border={"1px solid"}
      borderColor={"blue.300"}
      w={"100%"}
      top={0}
      bgColor={"blue.300"}
      right={0}
      overflow={"hidden"}
      opacity={0.75}
    >
      <Box
        as={motion.div}
        animate={{ rotate: 45 }}
        bgColor={"blue.100"}
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
        animate={{ rotate: 45 }}
        bgColor={"blue.100"}
        h={"250%"}
        rotate={"-60deg"}
        w={"0.3rem"}
        position={"absolute"}
        top={-4}
        bottom={"0%"}
        right={"50%"}
      />
    </Box>
  );
}
