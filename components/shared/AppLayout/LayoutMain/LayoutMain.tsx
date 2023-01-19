"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ILayoutMainProps {
  children: JSX.Element;
}

export default function LayoutMain({ children }: ILayoutMainProps) {
  const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

  return (
    <MotionBox
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20,
      }}
    >
      {children}
    </MotionBox>
  );
}
