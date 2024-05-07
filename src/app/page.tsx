import Hero from '@/components/Hero';
import Hours from '@/components/Hours';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Coffees from '@/components/Coffees';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Hours />
      <About />
      <Menu />
      <Coffees />
      <CTA />
      <Testimonials />
    </main>
  );
}
