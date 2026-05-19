import React, { useState } from "react";
import { ContactFormModal } from "./ContactForm"; // ✅ import modal

export function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="bg-[var(--rams-primary-deep)] text-center py-20 relative overflow-hidden"
        id="join"
      >
        {/* Background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 114, 42, 0.06), transparent 65%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-10 relative z-[1]">
          <h2
            className="text-[clamp(1.4rem,2.5vw,2rem)] text-white uppercase tracking-[0.06em] mb-3"
            style={{ fontFamily: "var(--ff-head)", fontWeight: 700 }}
          >
            Join the Closed Beta
          </h2>

          <p className="text-white/50 text-[0.92rem] max-w-[500px] mx-auto mb-8 leading-[1.7]">
            You don't just test a tool. You help define how RAMS will be practiced digitally.
          </p>

          {/* ✅ BUTTON (changed from <a> to <button>) */}
          <button
            onClick={() => setOpen(true)}
            className="inline-block px-10 py-[0.8rem] bg-[var(--rams-accent)] text-white text-[0.85rem] tracking-[0.06em] uppercase rounded transition-all shadow-[0_4px_20px_rgba(232,114,42,0.3)] hover:bg-[var(--rams-accent-dark)] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(232,114,42,0.4)]"
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