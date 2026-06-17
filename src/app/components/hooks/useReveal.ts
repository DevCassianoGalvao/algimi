import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>(staggerMs = 80) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll('[data-reveal]')
    ) as HTMLElement[];

    if (items.length === 0) {
      // Animate the container itself
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
            observer.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
      );
      observer.observe(container);
      return () => observer.disconnect();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, i * staggerMs);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}
