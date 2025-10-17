import Hero from '@/components/Hero';
import About from '@/components/About';
import Themes from '@/components/Themes';
import Timeline from '@/components/Timeline';
import Judging from '@/components/Judging';
import Prizes from '@/components/Prizes';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Judging />
      <Prizes />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
