"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import AuthorImage from "../../core/AuthorImage/AuthorImage";
import BackToHome from "../BackToHome/BackToHome";
import { useRouter } from "next/router";

export default function LayoutMain({ children, ...restProps }: BoxProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <Box as="main" {...restProps}>
      <AuthorImage home={isHome} />
      {children}
      {!isHome ? <BackToHome /> : null}
    </Box>
  );
}
