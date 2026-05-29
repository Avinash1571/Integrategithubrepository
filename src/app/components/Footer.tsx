import { Link } from 'react-router';
import logoImage from '../../assets/mainlogo.png';

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
            <a href="#" className="inline-flex items-center mb-6">
              <img src={logoImage} alt="RAMS360 Logo" className="h-[42px] w-auto" />
            </a>
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
              <li><Link to="/modules/pbs" className="text-sm hover:text-white transition-colors">Product Breakdown Structure</Link></li>
              <li><Link to="/modules/frp" className="text-sm hover:text-white transition-colors">Failure Rate Prediction</Link></li>
              <li><Link to="/modules/fmeca" className="text-sm hover:text-white transition-colors">FMECA Module</Link></li>
              <li><Link to="/modules/mttr" className="text-sm hover:text-white transition-colors">MTTR Analysis</Link></li>
              <li><Link to="/modules/pm" className="text-sm hover:text-white transition-colors">Preventive Maintenance</Link></li>
              <li><Link to="/modules/spares" className="text-sm hover:text-white transition-colors">Spare Parts Analysis</Link></li>
              <li><Link to="/modules/safety" className="text-sm hover:text-white transition-colors">Safety Analysis</Link></li>
              <li><Link to="/modules/fta" className="text-sm hover:text-white transition-colors">Fault Tree Analysis</Link></li>
              <li><Link to="/modules/rbd" className="text-sm hover:text-white transition-colors">Reliability Block Diagram</Link></li>
              <li><Link to="/modules/reports" className="text-sm hover:text-white transition-colors">Reports</Link></li>
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
