import { SubHeader } from '../components/SubHeader';
import { Header } from '../components/Header';
import { ContactFloat } from '../components/ContactFloat';
import { Hero } from '../components/Hero';
import { NewsBar } from '../components/NewsBar';
import { Solutions } from '../components/Solutions';
import { Standards } from '../components/Standards';
import { Split } from '../components/Split';
import { Features } from '../components/Features';
import { Trust } from '../components/Trust';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <ContactFloat />
      {/* <SubHeader /> */}
      <Header />
      <Hero />
      <NewsBar />
      <Split />
      <Solutions />
      <Standards />
      <Features />
      <Trust />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}