import { SubHeader } from '../components/SubHeader';
import { Header } from '../components/Header';
import { ContactFloat } from '../components/ContactFloat';
import { Hero } from '../components/Hero';
import { NewsBar } from '../components/NewsBar';
import { ProblemSolve } from '../components/ProblemSolve';
import { OneSourceOfTruth } from '../components/OneSourceOfTruth';
import { Solutions } from '../components/Solutions';
import { IndustriesHome } from '../components/IndustriesHome';
import { Standards } from '../components/Standards';
import { Features } from '../components/Features';
import { Trust } from '../components/Trust';
import { PlatformOverview } from '../components/PlatformOverview';
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
      <ProblemSolve />
      <OneSourceOfTruth />
      <Solutions />
      <IndustriesHome />
      <Standards />
      <Features />
      <Trust />
      <PlatformOverview />
      {/* <CTA /> */}
      <Footer />
      <BackToTop />
    </div>
  );
}