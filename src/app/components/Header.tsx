
import { useEffect, useState } from 'react';
import logoImage from '../../assets/logo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['modules', 'industries', 'why', 'standards', 'about'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[400] transition-all duration-[350ms] ${
        scrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">

        {/* LOGO */}
        <a href="#" className="flex items-center">
          <img
            src={logoImage}
            alt="RAMS360 Logo"
            className="h-[42px] w-auto"
          />
        </a>

        {/* ✅ ANIMATED HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-7 h-7 flex items-center justify-center group hover:opacity-80"
        >
          {/* TOP LINE */}
          <span
            className={`absolute h-[2px] w-6 transition-all duration-300 ease-in-out
              bg-black
              ${menuOpen ? 'rotate-45 top-1/2' : '-translate-y-2'}
              group-hover:scale-110`}
          />

          {/* MIDDLE LINE */}
          <span
            className={`absolute h-[2px] w-6 transition-all duration-300 ease-in-out
              bg-black
              ${menuOpen ? 'opacity-0' : ''}
              group-hover:scale-110`}
          />

          {/* BOTTOM LINE */}
          <span
            className={`absolute h-[2px] w-6 transition-all duration-300 ease-in-out
              bg-black
              ${menuOpen ? '-rotate-45 top-1/2' : 'translate-y-2'}
              group-hover:scale-110`}
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-[0.15rem]">
            {menuItems.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block px-4 py-2 text-[0.78rem] tracking-[0.06em] uppercase transition-colors relative
                    after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4
                    after:h-[2px] after:bg-[var(--rams-accent)] after:scale-x-0
                    after:transition-transform after:origin-left hover:after:scale-x-100
                    hover:text-[var(--rams-accent)]
                    text-[var(--rams-gray-700)]`}
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  {id === 'why'
                    ? 'Why RAMS360'
                    : id === 'about'
                    ? 'About Us'
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col text-center py-4">
            {menuItems.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm uppercase text-gray-700 hover:text-[var(--rams-accent)]"
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  {id === 'why'
                    ? 'Why RAMS360'
                    : id === 'about'
                    ? 'About Us'
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}