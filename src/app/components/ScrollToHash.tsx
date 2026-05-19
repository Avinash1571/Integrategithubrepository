import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
}