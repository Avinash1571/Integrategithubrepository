import logo from '../../imports/Rams_360_Logo_Invert600.png';

export function Footer() {
  return (
    <footer
      className="bg-[#1a1446] text-white/60 py-16 border-t border-white/[0.05]"
      id="about"
    >
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/[0.08]">

          {/* Left Section - Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-white">RAMS</span>
                <span className="text-[var(--rams-accent)]">360</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-white/50">
              The first cloud-native Reliability, Availability, Maintainability and Safety engineering platform — with full Lifecycle Cost Analysis. MIL-standard rigour. Browser-native delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/60">MIL-HDBK-217F</span>
              <span className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/60">MIL-STD-472</span>
              <span className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/60">NPRD 2016</span>
              <span className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/60">Cloud-native</span>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4 font-semibold">PLATFORM</h3>
            <ul className="space-y-2.5">
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">Product Breakdown Structure</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">Failure Rate Prediction</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">FMECA Module</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">MTTR Analysis</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">Preventive Maintenance</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">Safety Analysis</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">Lifecycle Cost Analysis</a></li>
              <li><a href="#modules" className="text-sm hover:text-white transition-colors">Reports</a></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4 font-semibold">INDUSTRIES</h3>
            <ul className="space-y-2.5">
              <li><a href="#industries" className="text-sm hover:text-white transition-colors">Aerospace & Defense</a></li>
              <li><a href="#industries" className="text-sm hover:text-white transition-colors">Automotive & Mobility</a></li>
              <li><a href="#industries" className="text-sm hover:text-white transition-colors">Railways & Transportation</a></li>
              <li><a href="#industries" className="text-sm hover:text-white transition-colors">Energy & Utilities</a></li>
              <li><a href="#industries" className="text-sm hover:text-white transition-colors">Industrial Manufacturing</a></li>
              <li><a href="#industries" className="text-sm hover:text-white transition-colors">Electronics</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/40 mb-4 font-semibold">COMPANY</h3>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-sm hover:text-white transition-colors">About RAMS360</a></li>
              <li><a href="#standards" className="text-sm hover:text-white transition-colors">Standards</a></li>
              <li><a href="#changelog" className="text-sm hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#beta" className="text-sm hover:text-white transition-colors">Beta Program</a></li>
              <li><a href="mailto:shifana.j@wolviosolutions.com" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Endyra Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-[0.4rem]">
            <span>🇮🇳</span> Proudly Made in India
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
