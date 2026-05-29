import React, { useState } from "react";

const ROLE_OPTIONS = [
  "Select your role",
  "RAMS Engineer",
  "Reliability Engineer",
  "Safety Engineer",
  "Systems Engineer",
  "Project Manager",
  "Academic / Researcher",
  "Student",
  "Consultant",
  "Other"
];

const INDUSTRY_OPTIONS = [
  "Select your industry",
  "Aerospace & Defence",
  "Automotive",
  "Railways",
  "Energy & Utilities",
  "Manufacturing",
  "Electronics",
  "Medical Devices",
  "Marine",
  "Academic / Research",
  "Other"
];

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  industry: string;
  country: string;
  message: string;
  consent: boolean;
}

const EMPTY_FORM: FormData = {
  fullName: "",
  workEmail: "",
  company: "",
  role: ROLE_OPTIONS[0],
  industry: INDUSTRY_OPTIONS[0],
  country: "",
  message: "",
  consent: false,
};

export function ContactFormModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [popup, setPopup] = useState({ show: false, message: "", success: true });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName) e.fullName = "Full name is required";
    if (!formData.workEmail) e.workEmail = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) e.workEmail = "Invalid email";
    if (!formData.company) e.company = "Organisation is required";
    if (!formData.role || formData.role === ROLE_OPTIONS[0]) e.role = "Please select your role";
    if (!formData.industry || formData.industry === INDUSTRY_OPTIONS[0]) e.industry = "Please select your industry";
    if (!formData.message) e.message = "Please tell us about your current RAMS workflow";
    if (!formData.consent) e.consent = "Consent is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.rams360tech.com/api/v1/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status === 201) {
        setPopup({ show: true, message: "Enquiry submitted successfully", success: true });
        setFormData(EMPTY_FORM);
        setErrors({});
      } else {
        setPopup({ show: true, message: data.message || "Something went wrong", success: false });
      }
    } catch {
      setPopup({ show: true, message: "Server error", success: false });
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`

        .rfm-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          padding: 16px;
          box-sizing: border-box;
        }

        .rfm-modal {
          display: flex;
          flex-direction: row;
          width: 100%;
          max-width: 960px;
          height: calc(100vh - 80px);
          max-height: 720px;
          min-height: 480px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.35);
        }

        /* LEFT — never scrolls */
        .rfm-left {
          width: 45%;
          flex-shrink: 0;
          background: linear-gradient(to bottom, #1a1446, #ff7a2f);
          color: #fff;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        .rfm-left h2 {
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 12px;
          font-family: inherit;
          word-break: break-word;
        }

        .rfm-left-sub {
          font-size: 0.875rem;
          opacity: 0.82;
          line-height: 1.6;
          margin: 0 0 28px;
        }

        .rfm-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .rfm-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .rfm-step-num {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .rfm-step-title {
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 3px;
        }

        .rfm-step-desc {
          font-size: 0.8rem;
          opacity: 0.78;
          line-height: 1.5;
        }

        .rfm-left-footer {
          font-size: 0.72rem;
          opacity: 0.6;
          line-height: 1.5;
          margin-top: 20px;
        }

        /* RIGHT — flex column, only body scrolls */
        .rfm-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fff;
          overflow: hidden;
          position: relative;
          min-width: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        /* Pinned header */
        .rfm-right-header {
          flex-shrink: 0;
          padding: 22px 36px 14px;
          border-bottom: 1px solid #e5e7eb;
          box-sizing: border-box;
        }

        .rfm-right-header h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px;
          font-family: inherit;
        }

        .rfm-right-header p {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        /* Close */
        .rfm-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border: none;
          background: #f3f4f6;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background 0.15s;
        }
        .rfm-close:hover { background: #e5e7eb; color: #111827; }

        /* Scrollable body — invisible scrollbar */
        .rfm-body {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 18px 36px 8px;
          box-sizing: border-box;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .rfm-body::-webkit-scrollbar { display: none; }

        /* Pinned footer */
        .rfm-footer {
          flex-shrink: 0;
          padding: 12px 36px 20px;
          border-top: 1px solid #e5e7eb;
          background: #fff;
          box-sizing: border-box;
        }

        /* Form rows */
        .rfm-row {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr);
          gap: 14px;
          margin-bottom: 2px;
        }

        .rfm-field {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* Always-reserved error height — modal never shifts */
        .rfm-err {
          font-size: 0.72rem;
          color: #ef4444;
          min-height: 16px;
          margin-top: 3px;
          line-height: 1;
        }

        .rfm-row-gap { margin-bottom: 2px; }

        /* Input — exact original styles */
        .rfm-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          outline: none;
          font-size: 14px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: #111827;
          background: #fff;
          box-sizing: border-box;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .rfm-input:focus {
          border-color: #ff7a2f;
          box-shadow: 0 0 0 2px rgba(255,122,47,0.2);
        }
        .rfm-input.err { border-color: #ef4444; }
        .rfm-input.err:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 2px rgba(239,68,68,0.18);
        }

        textarea.rfm-input {
          resize: none;
          height: 100px;
          line-height: 1.5;
        }

        select.rfm-input { cursor: pointer; }

        /* Label */
        .rfm-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          display: block;
        }

        /* Consent */
        .rfm-consent {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .rfm-consent input[type="checkbox"] {
          margin-top: 2px;
          cursor: pointer;
          flex-shrink: 0;
          width: 14px;
          height: 14px;
        }
        .rfm-consent label {
          font-size: 0.75rem;
          color: #4b5563;
          cursor: pointer;
          line-height: 1.5;
        }

        /* Submit */
        .rfm-submit {
          width: 100%;
          padding: 12px 24px;
          background: #f97316;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s;
        }
        .rfm-submit:hover:not(:disabled) { background: #ea6c0a; }
        .rfm-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Footer Benefits */
        .rfm-footer-benefits {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 12px;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .rfm-footer-benefits span {
          display: inline-flex;
          align-items: center;
        }
        .rfm-footer-benefits-bottom {
          display: flex;
          justify-content: center;
          margin-top: 6px;
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* Popup */
        .rfm-popup-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          padding: 16px;
          box-sizing: border-box;
        }
        .rfm-popup {
          background: #fff;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          width: 100%;
          max-width: 320px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }
        .rfm-popup-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          font-size: 1.4rem;
        }
        .rfm-popup-icon.ok   { border-color: #86efac; color: #22c55e; }
        .rfm-popup-icon.fail { border-color: #f87171; color: #ef4444; }
        .rfm-popup h4 {
          margin: 0 0 16px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #111827;
        }
        .rfm-popup-btn {
          background: #3b82f6;
          color: #fff;
          border: none;
          padding: 9px 28px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s;
        }
        .rfm-popup-btn:hover { background: #2563eb; }

        /* ── MOBILE ≤ 600px ── */
        @media (max-width: 600px) {
          .rfm-backdrop {
            align-items: flex-end;
            padding: 0;
          }

          .rfm-modal {
            flex-direction: column;
            width: 100%;
            max-width: 100%;
            height: 100vh;
            max-height: 100vh;
            min-height: unset;
            border-radius: 16px 16px 0 0;
            box-shadow: 0 -6px 32px rgba(0,0,0,0.25);
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .rfm-left {
            width: 100%;
            flex-shrink: 0;
            padding: 16px 16px 12px;
            justify-content: flex-start;
            gap: 0;
            max-height: 28vh;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }

          .rfm-left h2 {
            font-size: 1.15rem;
            margin: 0 0 8px;
            line-height: 1.3;
          }

          .rfm-left-sub {
            font-size: 0.8rem;
            margin: 0 0 12px;
            line-height: 1.5;
          }

          .rfm-steps {
            flex-direction: column;
            gap: 10px;
            padding-bottom: 4px;
          }

          .rfm-step {
            flex-direction: row;
            gap: 10px;
            flex: 0 0 auto;
            min-width: auto;
            background: rgba(255,255,255,0.12);
            border-radius: 8px;
            padding: 10px;
            align-items: center;
          }

          .rfm-step-num {
            width: 24px;
            height: 24px;
            font-size: 0.75rem;
          }

          .rfm-step-title {
            font-size: 0.75rem;
            margin-bottom: 2px;
          }
          .rfm-step-desc {
            font-size: 0.7rem;
            line-height: 1.4;
          }

          .rfm-left-footer { display: none; }

          .rfm-right {
            flex: 1;
            min-height: 0;
            max-height: 72vh;
            display: flex;
            flex-direction: column;
          }

          .rfm-right-header {
            padding: 16px 18px 12px;
            flex-shrink: 0;
          }

          .rfm-right-header h3 { font-size: 1.05rem; margin-bottom: 4px; }
          .rfm-right-header p  { font-size: 0.82rem; }

          .rfm-close {
            top: 12px;
            right: 14px;
            width: 30px;
            height: 30px;
            font-size: 0.95rem;
          }

          .rfm-body {
            flex: 1;
            padding: 12px 18px 8px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          /* Single column on mobile */
          .rfm-row {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 4px;
          }

          .rfm-row-gap {
            margin-bottom: 4px;
          }

          .rfm-field {
            margin-bottom: 0;
          }

          /* font-size 16px stops iOS Safari from zooming on input focus */
          .rfm-input {
            font-size: 16px;
            padding: 12px 14px;
            border-radius: 8px;
          }

          textarea.rfm-input {
            height: 90px;
            font-size: 16px;
          }

          .rfm-footer {
            padding: 12px 18px;
            flex-shrink: 0;
            padding-bottom: max(18px, env(safe-area-inset-bottom));
          }

          .rfm-submit {
            font-size: 0.95rem;
            padding: 13px 24px;
            font-weight: 700;
          }

          .rfm-consent label {
            font-size: 0.8rem;
            line-height: 1.5;
          }

          .rfm-err {
            font-size: 0.75rem;
            min-height: 18px;
            margin-top: 4px;
          }

          .rfm-consent input[type="checkbox"] {
            width: 16px;
            height: 16px;
          }
        }

        /* ── SMALL TABLET 601px – 767px ── */
        @media (min-width: 601px) and (max-width: 767px) {
          .rfm-modal {
            height: calc(100vh - 80px);
          }

          .rfm-left {
            width: 42%;
            padding: 26px 22px;
          }

          .rfm-left h2 { font-size: 1.4rem; }
          .rfm-left-sub { font-size: 0.82rem; margin-bottom: 18px; }

          .rfm-right-header { padding: 18px 24px 12px; }
          .rfm-body          { padding: 14px 24px 8px; }
          .rfm-footer        { padding: 10px 24px 16px; }

          .rfm-input { padding: 10px 12px; }
        }

      `}</style>

      <div className="rfm-backdrop">
        <div className="rfm-modal">

          {/* LEFT */}
          <div className="rfm-left">
            <div>
              <div className="rfm-beta-label" style={{ color: 'var(--rams-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem' }}>
                 CLOSED BETA PROGRAM
              </div>
              <h2>Join the engineers <span style={{ color: 'var(--rams-accent)' }}>defining digital RAMS.</span></h2>
              <p className="rfm-left-sub">
                RAMS360 is accepting a select cohort of practitioners, researchers, and faculty. Every submission is reviewed by the team. Your access pricing is locked in permanently from day one.
              </p>
              <div className="rfm-steps">
                {[
                  { title: "All 10 modules — free", desc: "Full platform access during beta. PBS, FRP, FMECA, MTTR, Safety, FTA, RBD, Spares, LCC, Reports — everything." },
                  { title: "Direct team access", desc: "Every submission is read by the engineers who built RAMS360. No sales queue. No automated reply. A real response." },
                  { title: "Shape the roadmap", desc: "Beta users have a real voice in what gets built next. Bug reports get fixed. Feature requests get considered." },
                ].map((s, i) => (
                  <div className="rfm-step" key={i}>
                    <div className="rfm-step-num">{i + 1}</div>
                    <div>
                      <div className="rfm-step-title">{s.title}</div>
                      <div className="rfm-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="rfm-left-footer">
              Limited cohort · Rolling review · No payment required<br />
              Early adopter pricing locked from first access date
            </p>
          </div>

          {/* RIGHT */}
          <div className="rfm-right">

            <div className="rfm-right-header">
              <h3>Request Beta Access</h3>
              <p>A short form. A real person reads every submission and responds within 48 hours.</p>
            </div>

            <button className="rfm-close" onClick={() => onOpenChange(false)} aria-label="Close">✕</button>

            <div className="rfm-body">

              <div className="rfm-row rfm-row-gap">
                <Field error={errors.fullName}>
                  <label className="rfm-label">FULL NAME <span style={{ color: 'var(--rams-accent)' }}>*</span></label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`rfm-input${errors.fullName ? " err" : ""}`}
                    placeholder="Your full name"
                  />
                </Field>
                <Field error={errors.workEmail}>
                  <label className="rfm-label">WORK OR ACADEMIC EMAIL <span style={{ color: 'var(--rams-accent)' }}>*</span></label>
                  <input
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`rfm-input${errors.workEmail ? " err" : ""}`}
                    placeholder="you@organisation.com"
                  />
                </Field>
              </div>

              <div className="rfm-row rfm-row-gap">
                <Field error={errors.company}>
                  <label className="rfm-label">ORGANISATION <span style={{ color: 'var(--rams-accent)' }}>*</span></label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`rfm-input${errors.company ? " err" : ""}`}
                    placeholder="Company or university"
                  />
                </Field>
                <Field error={errors.role}>
                  <label className="rfm-label">YOUR ROLE <span style={{ color: 'var(--rams-accent)' }}>*</span></label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`rfm-input${errors.role ? " err" : ""}`}
                  >
                    {ROLE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <div className="rfm-row rfm-row-gap">
                <Field error={errors.industry}>
                  <label className="rfm-label">INDUSTRY <span style={{ color: 'var(--rams-accent)' }}>*</span></label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`rfm-input${errors.industry ? " err" : ""}`}
                  >
                    {INDUSTRY_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field error={errors.country}>
                  <label className="rfm-label">COUNTRY</label>
                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`rfm-input${errors.country ? " err" : ""}`}
                    placeholder="Your country"
                  />
                </Field>
              </div>

              <div className="rfm-field rfm-row-gap">
                <label className="rfm-label">TELL US ABOUT YOUR CURRENT RAMS WORKFLOW <span style={{ color: 'var(--rams-accent)' }}>*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`rfm-input${errors.message ? " err" : ""}`}
                  placeholder="What tools are you using today? What's the biggest friction point? What would you want to test in RAMS360?"
                  rows={4}
                />
                <div className="rfm-err">{errors.message ?? ""}</div>
              </div>

              <div style={{ marginBottom: 2 }}>
                <div className="rfm-consent">
                  <input
                    type="checkbox"
                    id="rfm-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <label htmlFor="rfm-consent">
                    I agree to be contacted about RAMS360.
                  </label>
                </div>
                <div className="rfm-err" style={{ paddingLeft: 22 }}>
                  {errors.consent ?? ""}
                </div>
              </div>

            </div>

            <div className="rfm-footer">
              <button
                className="rfm-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "SEND BETA ACCESS REQUEST →"}
              </button>
              <div className="rfm-footer-benefits">
                <span>✓ Free during beta</span>
                <span>✓ No credit card</span>
                <span>✓ Direct team contact</span>
              </div>
              <div className="rfm-footer-benefits-bottom">
                <span>✓ Pricing locked on approval</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {popup.show && (
        <div className="rfm-popup-bg">
          <div className="rfm-popup">
            <div className={`rfm-popup-icon ${popup.success ? "ok" : "fail"}`}>
              <span>{popup.success ? "✔" : "✖"}</span>
            </div>
            <h4>{popup.message}</h4>
            <button
              className="rfm-popup-btn"
              onClick={() => {
                setPopup((p) => ({ ...p, show: false }));
                if (popup.success) onOpenChange(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="rfm-field">
      {children}
      <div className="rfm-err">{error ?? ""}</div>
    </div>
  );
}
