import { useEffect, useState, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMousePosition } from "@/hooks/use-mouse-position";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], img, input, textarea, select, [data-cursor-hover]";

export function CustomCursor() {
  const isMobile = useIsMobile();
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as Element | null;
    if (target && target.closest(INTERACTIVE_SELECTOR)) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as Element | null;
    if (target && target.closest(INTERACTIVE_SELECTOR)) {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile, handleMouseOver, handleMouseOut]);

  useEffect(() => {
    if (isMobile) return;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    }
    if (circleRef.current) {
      circleRef.current.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0) scale(${isHovering ? 1.5 : 1})`;
    }
  }, [x, y, isHovering, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#c8a961",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />
      <div
        ref={circleRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(200, 169, 97, 0.5)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease, transform 0.15s ease-out",
        }}
        aria-hidden="true"
      />
    </>
  );
}
