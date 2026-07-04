import { useRef, useEffect, useState, useCallback, type CSSProperties } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  staggerDelay?: number;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
  staggerDelay = 80,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
      rootMargin: "0px",
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, prefersReducedMotion]);

  const words = text.split(" ");

  const wordStyle = (index: number): CSSProperties => {
    // If reduced motion, show all words immediately without stagger
    if (prefersReducedMotion) {
      return {
        display: "inline-block",
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      };
    }

    return {
      display: "inline-block",
      opacity: isRevealed ? 1 : 0,
      transform: isRevealed ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
      transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms`,
    };
  };

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, index) => (
        <span key={index} style={wordStyle(index)}>
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
