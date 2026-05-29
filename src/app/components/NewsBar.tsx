import { useState, useEffect, useRef } from 'react';

const stats = [
  { target: 10, label: 'Integrated Modules' },
  { target: 6,  label: 'Mil-Grade Standards' },
  { target: 6,  label: 'Industry Verticals' },
  { target: 0,  label: 'Installs Required' },
];

function CountUp({ target, delay, started }: { target: number; delay: number; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (target === 0) return;

    const timeout = setTimeout(() => {
      const duration = 600;
      let startTime: number | null = null;

      const animate = (ts: number) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(target);
      };

      const raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, target, delay]);

  return <>{String(count).padStart(2, '0')}</>;
}

export function NewsBar() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#F9FAFB] border-y border-[var(--rams-gray-200)]">
      <div className="max-w-[1280px] mx-auto px-10 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[var(--rams-gray-200)]" />
              )}

              <span
                className="text-[1.7rem] leading-none text-[var(--rams-accent)] mb-1"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
              >
                <CountUp target={stat.target} delay={index * 150} started={started} />
              </span>

              <span
                className="text-[0.6rem] text-[var(--rams-gray-500)] uppercase tracking-[0.14em] text-center"
                style={{ fontFamily: 'var(--ff-head)', fontWeight: 600 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
