import React from "react";
import { Code, BrightProps } from "bright";
import theme from "./theme";

import styles from "./CodeSnippet.module.css";
import { CodeSnippetWrapper } from "./CodeSnippetWrapper/CodeSnippetWrapper";

export function CodeSnippet(props: BrightProps) {
  return (
    <CodeSnippetWrapper>
      <Code {...props} theme={theme} className={styles.wrapper} />
    </CodeSnippetWrapper>
  );
}
