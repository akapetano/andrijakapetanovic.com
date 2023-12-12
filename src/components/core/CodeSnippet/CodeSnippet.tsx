import React from "react";
import { Code, BrightProps } from "bright";
import theme from "./theme";

import styles from "./CodeSnippet.module.css";

export function CodeSnippet(props: BrightProps) {
  return <Code {...props} className={styles.wrapper} />;
}
