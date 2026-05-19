import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';


export default function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all elements with the animate-fade-in-up class
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-fade-in-up');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe on route changes
    const interval = setInterval(observeElements, 500);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>


      <RouterProvider router={router} />

      {/* Global Animation styles */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-fade-in-up.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}