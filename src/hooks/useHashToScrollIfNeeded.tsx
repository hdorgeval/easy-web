import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHashToScrollIfNeeded = (position: ScrollLogicalPosition = 'center') => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el?.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: position });
        return;
      }
    }
  }, [location, location.hash, position]);
};
