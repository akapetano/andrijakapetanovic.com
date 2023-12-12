import "./globals.css";
import React from "react";
import Providers from "../components/shared/Providers/Providers";
import AppLayout from "../components/shared/AppLayout/AppLayout";
import { ReducedMotionPreferences } from "../components/shared/ReducedMotionPreferences/ReducedMotionPreferences";

interface IRootLayoutProps {
  children: JSX.Element;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <ReducedMotionPreferences>
      <html lang="en">
        <body>
          <Providers>
            <AppLayout>{children}</AppLayout>
          </Providers>
        </body>
      </html>
    </ReducedMotionPreferences>
  );
}
