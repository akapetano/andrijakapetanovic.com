import { Heading } from "@/types/blog";

export function flattenHeadings(headings: Heading[]): Heading[] {
  const flatHeadings: Heading[] = [];

  function flatten(headings: Heading[]) {
    headings.forEach((heading) => {
      flatHeadings.push(heading);
      if (heading.children && heading.children.length > 0) {
        flatten(heading.children);
      }
    });
  }

  flatten(headings);
  return flatHeadings;
}
