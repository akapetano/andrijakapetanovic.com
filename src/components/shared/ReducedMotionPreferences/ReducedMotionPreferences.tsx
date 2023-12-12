"use client";

import { MotionConfig } from "framer-motion";

export function ReducedMotionPreferences({
  children,
}: {
  children: JSX.Element;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
