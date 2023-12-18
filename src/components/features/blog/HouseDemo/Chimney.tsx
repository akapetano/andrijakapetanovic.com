"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Chimney() {
  const [fireIsOn, setFireIsOn] = useState(false);

  return (
    <Box
      id="chimney-main"
      position="absolute"
      top={{ base: 18, md: 15 }}
      right={{ base: 100, md: 175 }}
      h={"5rem"}
      w={"2rem"}
    >
      <motion.div
        animate={{
          opacity: fireIsOn ? 100 : 0,
          translateY: fireIsOn ? 0 : -100,
        }}
        id="chimney-smoke-box"
        style={{
          height: "50px",
          left: "5px",
          top: 0,
          position: "absolute",
          width: "20px",
        }}
      >
        <Box id="chimney-smoke1" className="chimney-smoke" />
        <Box id="chimney-smoke2" className="chimney-smoke" />
        <Box id="chimney-smoke3" className="chimney-smoke" />
        <Box id="chimney-smoke4" className="chimney-smoke" />
        <Box id="chimney-smoke5" className="chimney-smoke" />
        <Box id="chimney-smoke6" className="chimney-smoke" />
      </motion.div>
      <Box
        id="chimney"
        bgColor="red.600"
        border="2px solid"
        borderColor="gray.900"
        borderTopWidth="20px"
        borderRadius="5px 5px 0 0"
        h={"7rem"}
        left="10%"
        top={0}
        position="absolute"
        width="2rem"
      />
    </Box>
  );
}
