import { useEffect, useRef, useCallback } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", staggerDelay = 0, once = true } = options;
  const ref = useRef<T>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add("revealed");

          if (staggerDelay > 0) {
            const children = Array.from(target.children) as HTMLElement[];
            children.forEach((child, index) => {
              child.style.transitionDelay = `${index * staggerDelay}ms`;
              child.classList.add("revealed");
            });
          }

          if (once) {
            observer.unobserve(target);
          }
        } else if (!once) {
          const target = entry.target as HTMLElement;
          target.classList.remove("revealed");

          if (staggerDelay > 0) {
            const children = Array.from(target.children) as HTMLElement[];
            children.forEach((child) => {
              child.style.transitionDelay = "0ms";
              child.classList.remove("revealed");
            });
          }
        }
      });
    },
    [staggerDelay, once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, handleIntersect]);

  return ref;
}
