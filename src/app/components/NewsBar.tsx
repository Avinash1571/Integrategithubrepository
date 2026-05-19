

// =========================
// NewsBar.tsx
// =========================
import React, { useState } from "react";
import { ContactFormModal } from "./ContactForm";

export function NewsBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[var(--rams-cream)] py-4 border-b border-[var(--rams-gray-200)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center gap-6 flex-wrap justify-center">
          <div
            className="text-[0.85rem] text-[var(--rams-primary)] uppercase tracking-[0.06em]"
            style={{ fontFamily: "var(--ff-head)", fontWeight: 700 }}
          >
            Closed Beta Program
          </div>

          <div className="text-[0.88rem] text-[var(--rams-gray-600)]">
            Now accepting RAMS practitioners, researchers & engineering faculty
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-[0.72rem] text-[var(--rams-primary)] uppercase tracking-[0.1em] border border-[var(--rams-primary)] px-4 py-[0.4rem] transition-all hover:bg-[var(--rams-primary)] hover:text-white"
            style={{ fontFamily: "var(--ff-head)", fontWeight: 700 }}
          >
            Request Access
          </button>
        </div>
      </div>

      {open && <ContactFormModal onClose={() => setOpen(false)} />}
    </>
  );
}
