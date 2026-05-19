import { useEffect, useState } from 'react';
import logoImage from '../../../assets/c1b01b2a1eb72965f21a7839f25fd65043f5e1f8.png';
import mainLogo from "../../../assets/mainlogo.png"

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[400] transition-all duration-[350ms] ${scrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
        <a href="/" className="flex items-center">
          <img
            src={scrolled ? logoImage : mainLogo}
            alt="RAMS360 Logo"
            className="h-[42px] w-auto"
          />
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-[0.15rem]">
            {/* {['modules', 'industries', 'why', 'standards', 'about'].map((id) => (
              <li key={id}>
                <a
                  href={id === 'industries' ? '/industries' : `#${id}`}
                  className={`block px-4 py-2 text-[0.78rem] tracking-[0.06em] uppercase transition-colors relative
                    after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4
                    after:h-[2px] after:bg-[var(--rams-accent)] after:scale-x-0
                    after:transition-transform after:origin-left hover:after:scale-x-100
                    hover:text-[var(--rams-accent)]
                    ${scrolled ? 'text-[var(--rams-gray-600)]' : 'text-white'}`}
                  style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
                >
                  {id === 'why'
                    ? 'Why RAMS360'
                    : id === 'about'
                      ? 'About Us'
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))} */}
          </ul>
        </nav>
      </div>
    </header>
  );
}