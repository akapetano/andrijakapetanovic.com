"use client";

import { Link, LinkProps, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
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
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === to;
  const linkColor = useColorModeValue("brand.700", "brand.200");
  if (isActive) {
    return (
      <Link
        variant={"activeNavLink"}
        as={NextLink}
        position="relative"
        href={to}
        color={linkColor}
        opacity="1"
        textTransform={textTransform}
        fontWeight={600}
        pb={{ base: "0.5em", md: "0.8em" }}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      variant={"slidingUnderline"}
      as={NextLink}
      href={to}
      textTransform={textTransform}
      fontWeight={400}
      pb={{ base: "0.5em", md: "0.8em" }}
      {...props}
    >
      {children}
    </Link>
  );
}
