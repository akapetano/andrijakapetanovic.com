import { Heading } from "@/types/blog";
import { useState, useEffect } from "react";
import { debounce } from "@/lib/time";
import { flattenHeadings } from "@/lib/blog";

export interface Config {
  debounceTime: number;
  threshold: number;
}

export function useActiveHeading(
  headings: Heading[] | undefined,
  config: Config = { debounceTime: 0, threshold: 0.21 }
) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { debounceTime, threshold } = config;

  const flatHeadings = flattenHeadings(headings ?? []);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = flatHeadings
        ? flatHeadings.map(({ id }) => document.getElementById(id))
        : [];

      const visibleHeadings = headingElements.find((heading) => {
        if (!heading) return false;
        const { top } = heading.getBoundingClientRect();
        return top >= 0 && top <= window.innerHeight * threshold; // Adjust this threshold as needed
      });

      if (visibleHeadings) {
        setActiveId(visibleHeadings?.id || null);
      }
    };

    const debouncedScrollHandler = debounce(handleScroll, debounceTime);

    window.addEventListener("scroll", debouncedScrollHandler);

    debouncedScrollHandler(); // Run on mount to check the initial scroll position

    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [flatHeadings, debounceTime, threshold]);

  return activeId;
}
