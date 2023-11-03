import "./globals.css";
import { Montserrat } from "@next/font/google";
import React from "react";
import Providers from "../components/shared/Providers/Providers";
import AppLayout from "../components/shared/AppLayout/AppLayout";

const montserrat = Montserrat({ subsets: ["latin"] });

interface IRootLayoutProps {
  children: JSX.Element;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
