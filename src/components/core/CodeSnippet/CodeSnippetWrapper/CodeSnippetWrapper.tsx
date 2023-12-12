"use client";

import { Box, Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { useClipboard } from "@/hooks/useClipboard";

export const CodeSnippetWrapper = ({ children }: { children: ReactNode }) => {
  const { copyLabel, textRef, handleCopyToClipboard } = useClipboard();

  return (
    <Box position="relative" className="code-snippet-wrapper">
      <Box ref={textRef}>{children}</Box>
      <Button
        size={"xs"}
        variant="primaryGhost"
        cursor="pointer"
        p="0.2rem"
        aria-label="Copy"
        leftIcon={<CopyIcon />}
        position="absolute"
        top={2}
        right={2}
        opacity={0}
        sx={{
          ".code-snippet-wrapper: hover &": {
            opacity: 1,
          },
        }}
        onClick={handleCopyToClipboard}
      >
        {copyLabel}
      </Button>
    </Box>
  );
};
