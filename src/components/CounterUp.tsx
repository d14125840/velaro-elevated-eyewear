import { useRef, useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CounterUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CounterUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);
  const [hasStarted, setHasStarted] = useState(false);
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      });
    },
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect]);

  useEffect(() => {
    if (!hasStarted) return;

    // If reduced motion is preferred, show end value immediately
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(eased * end);

      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [hasStarted, end, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
