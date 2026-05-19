export function Footer() {
  return (
    <footer
      className="bg-[var(--rams-primary-deep)] text-white/45 py-12 pt-12 border-t border-white/[0.05]"
      id="about"
    >
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Top section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-8 pb-8 border-b border-white/[0.05]">
          <ul className="flex flex-wrap gap-2 gap-x-6">
            <li>
              <a href="#modules" className="text-[0.8rem] transition-colors hover:text-[var(--rams-accent)]">
                Modules
              </a>
            </li>
            <li>
              <a href="#platform" className="text-[0.8rem] transition-colors hover:text-[var(--rams-accent)]">
                Platform
              </a>
            </li>
            <li>
              <a href="#why" className="text-[0.8rem] transition-colors hover:text-[var(--rams-accent)]">
                Why RAMS360
              </a>
            </li>
            <li>
              <a href="#beta" className="text-[0.8rem] transition-colors hover:text-[var(--rams-accent)]">
                Beta Program
              </a>
            </li>
            <li>
              <a
                href="mailto:shifana.j@wolviosolutions.com"
                className="text-[0.8rem] transition-colors hover:text-[var(--rams-accent)]"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div>
            <a
              href="mailto:shifana.j@wolviosolutions.com"
              className="block text-[0.8rem] mb-1 transition-colors hover:text-[var(--rams-accent)]"
            >
              shifana.j@wolviosolutions.com
            </a>
            <a
              href="tel:+918778301798"
              className="block text-[0.8rem] transition-colors hover:text-[var(--rams-accent)]"
            >
              +91 877 830 1798
            </a>
          </div>
        </div> */}

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 pt-6">
          <p className="text-[0.72rem] font-[Acme]">© 2026 Endyra Pvt Ltd. All rights reserved.</p>
          <div className="text-[0.72rem] flex items-center gap-[0.4rem]">
            <span>🇮🇳</span> Proudly Made in India
          </div>
        </div>
      </div>
    </footer>
  );
}
