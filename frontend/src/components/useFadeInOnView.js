// src/hooks/useFadeInOnView.js
import { useState, useEffect } from 'react';

export default function useFadeInOnView(ref, options) {
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Check if the element is currently visible in the viewport
      if (entry.isIntersecting) {
        setHasIntersected(true);
        // Important: Disconnect the observer so it only runs once
        observer.disconnect();
      }
    }, options);

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, options]);

  return hasIntersected;
}