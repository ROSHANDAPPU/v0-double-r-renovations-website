// useIntersectionObserver.ts
import { useEffect, useState, RefObject } from "react";

export default function useIntersectionObserver<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}