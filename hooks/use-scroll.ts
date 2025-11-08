import { useState, useEffect } from 'react';

let scrollY = 0;
const listeners = new Set<(scrollY: number) => void>();

const handleScroll = () => {
  scrollY = window.scrollY;
  listeners.forEach(callback => callback(scrollY));
};

export function useScrollY() {
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    const callback = (scrollY: number) => setCurrentScrollY(scrollY);
    
    if (listeners.size === 0) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    listeners.add(callback);
    callback(scrollY); // Set initial value

    return () => {
      listeners.delete(callback);
      if (listeners.size === 0) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return currentScrollY;
}