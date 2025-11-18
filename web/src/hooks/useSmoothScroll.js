import { useCallback } from 'react';

export default function useSmoothScroll() {
  return useCallback((target) => {
    if (typeof window === 'undefined') return;
    const element =
      typeof target === 'string' ? document.querySelector(target) : target;

    if (element?.scrollIntoView) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
}
