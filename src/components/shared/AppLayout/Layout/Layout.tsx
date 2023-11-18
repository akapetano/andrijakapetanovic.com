import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children, ...restProps }: ILayoutProps) {
  return (
    <div
      style={{ maxWidth: "40rem", height: "100%", margin: "6rem auto 6rem" }}
      {...restProps}
    >
      {children}
    </div>
  );
}
