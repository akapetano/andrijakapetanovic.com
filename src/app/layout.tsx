import "./globals.css";
import React from "react";
import Providers from "../components/shared/Providers/Providers";
import AppLayout from "../components/shared/AppLayout/AppLayout";
import { ReducedMotionPreferences } from "../components/shared/ReducedMotionPreferences/ReducedMotionPreferences";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/constants";

interface IRootLayoutProps {
  children: JSX.Element;
}

export const metadata = {
  metadataBase: new URL("https://andrijakapetanovic.com"),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

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
