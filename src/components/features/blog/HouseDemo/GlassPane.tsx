import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IGlassPaneProps {
  isOpen?: boolean;
  isLightOn?: boolean;
}

export function GlassPane({
  isOpen = false,
  isLightOn = false,
}: IGlassPaneProps) {
  const glassPaneColor = useColorModeValue("blue.300", "blue.400");
  const glassPaneReflectionColor = useColorModeValue("blue.100", "blue.200");

  return (
    <Box
      position={"absolute"}
      h={"100%"}
      border={"1px solid"}
      borderColor={glassPaneColor}
      w={"100%"}
      top={0}
      bgColor={glassPaneColor}
      right={0}
      overflow={"hidden"}
      opacity={isLightOn && !isOpen ? 0.5 : 0.8}
      transitionDelay={isLightOn && !isOpen ? "0.15s" : "0.08s"}
    >
      <Box
        as={motion.div}
        animate={{ rotate: 45, opacity: !isOpen && isLightOn ? 0.2 : 0.25 }}
        transitionDuration={"0.01s"}
        bgColor={glassPaneReflectionColor}
        h={!isOpen ? "200%" : "220%"}
        rotate={"-60deg"}
        w={"0.25rem"}
        position={"absolute"}
        top={-3}
        bottom={"0%"}
        right={"15%"}
      />

      <Box
        as={motion.div}
        animate={{ rotate: 45, opacity: !isOpen && isLightOn ? 0.2 : 0.25 }}
        transitionDuration={"0.01s"}
        bgColor={glassPaneReflectionColor}
        h={"250%"}
        rotate={isOpen ? "-60deg" : "60deg"}
        w={"0.3rem"}
        position={"absolute"}
        top={-6}
        bottom={"0%"}
        right={"45%"}
      />
    </Box>
  );
}
