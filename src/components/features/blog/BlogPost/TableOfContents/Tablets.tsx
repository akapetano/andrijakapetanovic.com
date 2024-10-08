"use client";

import { Heading } from "@/types/blog";
import { OrderedList, ListItem, ListProps } from "@chakra-ui/react";
import { useActiveHeading } from "@/hooks/useActiveHeading";

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
      flexDir="column"
      alignItems="flex-end"
      gap="2"
    >
      {headings.map(({ id, text, children, level }) => {
        const isActive = activeId === id;

        return (
          <>
            <ListItem
              display="block"
              key={id}
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
              w={90 / level + "px"}
              h={"0.25rem"}
              rounded="sm"
            />
            {children && children.length > 0 ? (
              <RecursiveTablets headings={children} activeId={activeId} m="0" />
            ) : null}
          </>
        );
      })}
    </OrderedList>
  ) : null;
}

export function Tablets({ headings, ...restProps }: ITablets) {
  const activeId = useActiveHeading(headings);

  return headings ? (
    <RecursiveTablets
      headings={headings}
      {...restProps}
      ml="0"
      activeId={activeId}
    />
  ) : null;
}
