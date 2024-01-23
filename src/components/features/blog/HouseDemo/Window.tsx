"use client";

import { useState, useEffect } from "react";
import { WindowPane } from "./WindowPane";
import { motion } from "framer-motion";
import { GridItem } from "@chakra-ui/react";

interface IWindowProps {
  layer: "HTML" | "HTML & CSS" | "HTML, CSS & JavaScript";
  windowSide: "left" | "right";
}

export function Window({ layer, windowSide }: IWindowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isHTMLOnly = layer === "HTML";
  const isFullHouse = layer === "HTML, CSS & JavaScript";
  const windowSideIsLeft = windowSide === "left";

  function toggleWindows() {
    if (isFullHouse) {
      setIsOpen(!isOpen);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (!isFullHouse && isHTMLOnly) {
      setIsOpen(false);
    }
  }, [isFullHouse, isHTMLOnly]);

  return (
    <GridItem
      as={motion.div}
      initial={false}
      position={"relative"}
      transformOrigin={windowSideIsLeft ? "0% 0%" : "100% 0%"}
      borderWidth={{ base: "4px", md: "8px" }}
      style={{
        border: "solid #fff",
        boxShadow: "0 0 0 1px hsl(0, 0%, 70%)",
      }}
      animate={{
        rotateY: windowSideIsLeft ? (isOpen ? -180 : 0) : isOpen ? 180 : 0,
      }}
      zIndex={4}
      onClick={toggleWindows}
      cursor={isFullHouse ? "pointer" : "default"}
    >
      <WindowPane isOpen={isOpen} />
    </GridItem>
  );
}
