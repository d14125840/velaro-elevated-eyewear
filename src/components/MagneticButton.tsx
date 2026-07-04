import { useRef, useCallback, useState, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({ children, strength = 0.3, className = "" }: MagneticButtonProps) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0)`);
    },
    [isMobile, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("translate3d(0, 0, 0)");
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
}
