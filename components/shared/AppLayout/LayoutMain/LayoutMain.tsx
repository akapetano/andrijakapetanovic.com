"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function LayoutMain({ children, ...restProps }: BoxProps) {
  const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

  return (
    <MotionBox
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      {...restProps}
    >
      {children}
    </MotionBox>
  );
}
