import React, { useState } from "react";
import { ContactFormModal } from "./ContactForm"; // ✅ import modal

export function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="bg-[#F9FAFB] text-center py-20 relative overflow-hidden"
        id="join"
      >
        {/* Soft decorative glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 114, 42, 0.05), transparent 65%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-10 relative z-[1]">
          <h2
            className="text-[clamp(1.4rem,2.5vw,2rem)] text-[#1a1a2e] uppercase tracking-[0.06em] mb-3"
            style={{ fontFamily: "var(--ff-head)", fontWeight: 800 }}
          >
            Join the Closed Beta
          </h2>

          <p className="text-[#4a4a6a] text-[0.92rem] max-w-[500px] mx-auto mb-8 leading-[1.7]">
            You don't just test a tool. You help define how RAMS will be practiced digitally.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="inline-block px-10 py-[0.8rem] bg-[var(--rams-accent)] text-white text-[0.85rem] tracking-[0.06em] uppercase rounded transition-all shadow-[0_4px_20px_rgba(232,114,42,0.25)] hover:bg-[var(--rams-accent-dark)] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(232,114,42,0.35)]"
            style={{ fontFamily: "var(--ff-head)", fontWeight: 700 }}
          >
            Request Beta Access
          </button>

          <p className="italic text-[0.85rem] text-[var(--rams-accent)] mt-6">
            Goal: validate real-world RAMS workflows.
          </p>
        </div>
      </section>

      {/* ✅ MODAL */}
      <ContactFormModal open={open} onOpenChange={setOpen} />
    </>
  );
}