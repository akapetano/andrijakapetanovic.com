import { ColorModeScript } from "@chakra-ui/react";
import { Montserrat } from "@next/font/google";
import React from "react";

const montserrat = Montserrat();

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ColorModeScript />
        {children}
      </body>
    </html>
  );
}
