import { Heading } from "@/types/blog";
import { OrderedList, ListItem, ListProps } from "@chakra-ui/react";
import Link from "next/link";

interface ITableOfContents extends ListProps {
  headings?: Heading[];
}

function RecursiveHeadings({ headings, ...restProps }: ITableOfContents) {
  return headings ? (
    <OrderedList {...restProps}>
      {headings.map(({ id, text, children }) => (
        <ListItem
          key={id}
          fontWeight="bold"
          fontFamily="heading"
          _dark={{ color: "gray.300" }}
          _light={{ color: "gray.600" }}
          fontSize="0.875rem"
        >
          <Link href={`#${id}`}>{text}</Link>
          {children && children.length > 0 ? (
            <RecursiveHeadings headings={children} />
          ) : null}
        </ListItem>
      ))}
    </OrderedList>
  ) : null;
}

export function TableOfContents({ headings, ...restProps }: ITableOfContents) {
  return headings ? (
    <RecursiveHeadings headings={headings} {...restProps} />
  ) : null;
}
