import { ReactNode } from "react";

interface ISectionContainerProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string | number;
}

export function SectionContainer({
  children,
  justifyContent = "space-around",
  alignItems = "start",
  maxWidth = "auto",
}: ISectionContainerProps) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContent,
        fontSize: "1.2rem",
        lineHeight: "1.5",
        paddingTop: "1px",
        alignItems: alignItems,
        maxWidth: maxWidth,
      }}
    >
      {children}
    </section>
  );
}
