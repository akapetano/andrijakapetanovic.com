"use client";

import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
<<<<<<< HEAD
import { useSelectedLayoutSegment } from "next/navigation";
=======
import { useRouter } from "next/router";
>>>>>>> master
import React from "react";

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  to: string;
  activeProps?: LinkProps;
  _hover?: LinkProps;
  _before?: LinkProps;
}

export default function NavLink({
  to,
  textTransform,
  activeProps,
  children,
  _hover,
  ...props
}: NavLinkProps) {
<<<<<<< HEAD
  const segment = useSelectedLayoutSegment();
  const isActive = to === `/${segment}`;
=======
  const router = useRouter();
  const isActive = router.pathname === to;
>>>>>>> master
  const linkColor = useColorModeValue("brand.700", "brand.200");
  if (isActive) {
    return (
      <ChakraLink
        as={NextLink}
        href={to}
        color={linkColor}
        opacity="1"
        textTransform={textTransform}
        {...props}
        {...activeProps}
        _before={{
          content: "''",
          position: "absolute",
          width: "100%",
          height: "2px",
          borderRadius: "2px",
          bottom: "0",
          left: "0",
          transform: "scaleX(100%)",
          transition: "transform .3s ease-in-out",
        }}
        _hover={{
          color: linkColor,
          textDecoration: "none",
        }}
      >
        {children}
      </ChakraLink>
    );
  }

  return (
    <ChakraLink
      as={NextLink}
      href={to}
      textTransform={textTransform}
      fontWeight={300}
      {...props}
      _hover={{ textDecoration: "none", opacity: "1" }}
    >
      {children}
    </ChakraLink>
  );
}
