import { useEffect, useState, useCallback, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const isMobile = useIsMobile();
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMobile) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: e.clientX / window.innerWidth,
          normalizedY: e.clientY / window.innerHeight,
        });
      });
    },
    [isMobile]
  );

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMobile, handleMouseMove]);

  return position;
}
