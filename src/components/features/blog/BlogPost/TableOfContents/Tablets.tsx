"use client";

import { Fragment, forwardRef } from "react";
import { Heading } from "@/types/blog";
import {
  OrderedList,
  ListItem,
  ListProps,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useActiveHeading } from "@/hooks/useActiveHeading";
import Link from "next/link";

interface ITablets extends ListProps {
  headings?: Heading[];
  activeId?: string | null;
}

function RecursiveTablets({ headings, activeId, ...restProps }: ITablets) {
  return headings ? (
    <OrderedList
      {...restProps}
      listStyleType="none"
      display="flex"
      flexDir={{ base: "column-reverse", lg: "column" }}
      alignItems="flex-end"
      gap={{ base: "1.5", md: "2" }}
      transform=""
    >
      {headings.map(({ id, children, level }) => {
        const isActive = activeId === id;

        return (
          <Fragment key={id}>
            <Link href={`#${id}`}>
              <ListItem
                display="block"
                fontWeight={level === 3 ? "600" : "500"}
                fontFamily="heading"
                _dark={{
                  bgColor: isActive
                    ? "brand.300"
                    : level === 3
                    ? "gray.500"
                    : "gray.500",
                }}
                _light={{
                  bgColor: isActive
                    ? "brand.600"
                    : level === 3
                    ? "gray.200"
                    : "gray.200",
                }}
                fontSize="medium"
                _hover={{
                  _dark: { bgColor: "brand.300" },
                  _light: { bgColor: "brand.600" },
                }}
                w={{ base: 70 / level + "px", md: 90 / level + "px" }}
                h={{ base: "4px", md: "6px" }}
                rounded="lg"
              />
            </Link>
            {children && children.length > 0 ? (
              <RecursiveTablets headings={children} activeId={activeId} m="0" />
            ) : null}
          </Fragment>
        );
      })}
    </OrderedList>
  ) : null;
}

export const Tablets = forwardRef<HTMLDivElement, ITablets>(function Tablets(
  { headings, ...restProps },
  ref
) {
  const bg = useColorModeValue("white", "gray.700");
  const activeId = useActiveHeading(headings);

  return headings ? (
    <>
      <Box
        ref={ref}
        display={{ base: "block", lg: "none" }}
        {...restProps}
        style={{ rotate: "90deg" }}
        bg={bg}
        p="2"
        shadow="0 0 10px 2px rgba(0, 0, 0, 0.1)"
        rounded="lg"
        maxW="200px"
      >
        <RecursiveTablets headings={headings} ml="0" activeId={activeId} />
      </Box>
      <Box
        ref={ref}
        display={{ base: "none", lg: "block" }}
        {...restProps}
        bg={"white"}
        p={{ base: "2", md: 0 }}
        shadow={{ base: "0 0 10px 2px rgba(0, 0, 0, 0.1)", md: "none" }}
        rounded={{ base: "lg", md: "none" }}
      >
        <RecursiveTablets headings={headings} ml="0" activeId={activeId} />
      </Box>
    </>
  ) : null;
});
