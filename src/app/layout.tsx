import "./globals.css";
import { Montserrat, Spline_Sans_Mono } from "next/font/google";
import React from "react";
import clsx from "clsx";
import Providers from "../components/shared/Providers/Providers";
import AppLayout from "../components/shared/AppLayout/AppLayout";
import { ReducedMotionPreferences } from "../components/shared/ReducedMotionPreferences/ReducedMotionPreferences";

const montserrat = Montserrat({ subsets: ["latin"] });

const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

interface IRootLayoutProps {
  children: JSX.Element;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <ReducedMotionPreferences>
      <html lang="en" className={clsx(montserrat.className, monoFont.variable)}>
        <body>
          <Providers>
            <AppLayout>{children}</AppLayout>
          </Providers>
        </body>
      </html>
    </ReducedMotionPreferences>
  );
}
