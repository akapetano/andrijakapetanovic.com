"use client";

import { Heading } from "@/types/blog";
import { OrderedList, ListItem, ListProps } from "@chakra-ui/react";
import Link from "next/link";
import { useActiveHeading } from "@/hooks/useActiveHeading";

interface ITableOfContents extends ListProps {
  headings?: Heading[];
  activeId?: string | null;
}

function RecursiveHeadings({
  headings,
  activeId,
  ...restProps
}: ITableOfContents) {
  return headings ? (
    <OrderedList {...restProps} listStyleType="none">
      {headings.map(({ id, text, children, level }) => {
        const isActive = activeId === id;

        return (
          <ListItem
            key={id}
            fontWeight={level === 3 ? "600" : "500"}
            fontFamily="heading"
            _dark={{
              color: isActive
                ? "brand.300"
                : level === 3
                ? "gray.300"
                : "gray.400",
            }}
            _light={{
              color: isActive
                ? "brand.600"
                : level === 3
                ? "gray.600"
                : "gray.500",
            }}
            fontSize="medium"
            _hover={{
              _dark: { color: "brand.300" },
              _light: { color: "brand.600" },
            }}
          >
            <Link href={`#${id}`}>{text}</Link>
            {children && children.length > 0 ? (
              <RecursiveHeadings headings={children} activeId={activeId} />
            ) : null}
          </ListItem>
        );
      })}
    </OrderedList>
  ) : null;
}

export function Headings({ headings, ...restProps }: ITableOfContents) {
  const activeId = useActiveHeading(headings);

  return headings ? (
    <RecursiveHeadings
      headings={headings}
      {...restProps}
      ml="0"
      activeId={activeId}
    />
  ) : null;
}
