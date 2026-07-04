import { useRef, useEffect, useState, useCallback, type ReactNode, type CSSProperties } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  delay?: number;
}

export function ImageReveal({
  children,
  className = "",
  direction = "left",
  duration = 1000,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const getClipPath = (): string => {
    if (isRevealed) return "inset(0 0 0 0)";

    switch (direction) {
      case "left":
        return "inset(0 100% 0 0)";
      case "right":
        return "inset(0 0 0 100%)";
      case "top":
        return "inset(100% 0 0 0)";
      case "bottom":
        return "inset(0 0 100% 0)";
      default:
        return "inset(0 100% 0 0)";
    }
  };

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    [delay]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect]);

  const style: CSSProperties = {
    clipPath: getClipPath(),
    transition: `clip-path ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
