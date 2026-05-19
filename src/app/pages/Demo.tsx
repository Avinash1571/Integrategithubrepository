
import logoImage from '../../assets/logo.png';
import { Header } from '../components/Industries/Header';
import { ContactFloat } from '../components/Industries/ContactFloat';
import { Hero } from '../components/Industries/Hero';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Industries } from '../components/Industries';



export function Demo() {
    return (
        <div className="overflow-x-hidden">
            <ContactFloat />
              <header className="fixed top-0 left-0 right-0 z-[400] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-[72px]">
          <Link to="/#modules" className="flex items-center gap-3 text-[var(--rams-gray-600)] hover:text-[var(--rams-accent)] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[0.78rem] uppercase tracking-[0.06em]" style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}>
              Back to Home
            </span>
          </Link>
          <a href="#" className="flex items-center gap-[0.3rem]">
            <div>
              <img
                src={logoImage}
                alt="RAMS360 Logo"
                className="h-[42px] w-auto"
              />
            </div>
          </a>
        </div>
      </header>
            <Hero />
            <Industries/>
        </div>
    );
}