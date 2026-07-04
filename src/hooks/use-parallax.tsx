import { useEffect, useState, useRef, useCallback } from "react";

interface ParallaxStyle {
  transform: string;
}

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax(options: UseParallaxOptions = {}): ParallaxStyle {
  const { speed = 0.5, direction = "up" } = options;
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number>(0);
  const lastScrollRef = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      if (scrollY !== lastScrollRef.current) {
        lastScrollRef.current = scrollY;
        const multiplier = direction === "up" ? -1 : 1;
        setOffset(scrollY * speed * multiplier);
      }
    });
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return {
    transform: `translate3d(0, ${offset}px, 0)`,
  };
}
