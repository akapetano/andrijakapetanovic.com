import { Heading } from "@/types/blog";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

interface IDesktopProps {
  headings?: Heading[];
}

export const TableOfContents = ({ headings }: IDesktopProps) => {
  return (
    <>
      <Desktop headings={headings} />
      <Mobile headings={headings} />
    </>
  );
};
