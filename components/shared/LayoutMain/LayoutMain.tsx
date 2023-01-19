"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import AuthorImage from "../../core/AuthorImage/AuthorImage";
import BackToHome from "../BackToHome/BackToHome";
import { usePathname } from "next/navigation";

export default function LayoutMain({ children, ...restProps }: BoxProps) {
  const pathname = usePathname();
  const isHome = !pathname;

  return (
    <Box as="main" {...restProps}>
      <AuthorImage home={isHome} />
      {children}
      {!isHome ? <BackToHome /> : null}
    </Box>
  );
}
