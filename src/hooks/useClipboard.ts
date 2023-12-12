import { useRef, useState } from "react";

export const useClipboard = () => {
  const [copyLabel, setCopyLabel] = useState<string>("Copy");
  const textRef = useRef<HTMLDivElement>(null);

  const handleCopyToClipboard = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event) {
      event.preventDefault();
    }

    navigator.clipboard.writeText(textRef.current?.innerText || "");

    setCopyLabel("Copied");
    setTimeout(() => setCopyLabel("Copy"), 4000);
  };

  return { textRef, handleCopyToClipboard, copyLabel };
};
