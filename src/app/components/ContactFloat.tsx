import { Mail } from 'lucide-react';

export function ContactFloat() {
  return (
    <a
      href="mailto:shifana.j@wolviosolutions.com"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[500] flex items-center gap-2 bg-[var(--rams-green)] text-white px-4 py-[0.65rem] pl-3 rounded-l-md cursor-pointer text-[0.72rem] tracking-[0.12em] uppercase shadow-[-2px_2px_12px_rgba(0,0,0,0.15)] transition-all hover:bg-[#00c4a0] hover:pr-[1.4rem]"
      style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
    >
      <Mail className="w-[18px] h-[18px] flex-shrink-0" />
      Join Beta
    </a>
  );
}