import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-[42px] h-[42px] bg-white border border-[var(--rams-gray-200)] rounded flex items-center justify-center cursor-pointer transition-all z-[300] shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-[var(--rams-gray-600)] hover:border-[var(--rams-accent)] hover:text-[var(--rams-accent)] ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
