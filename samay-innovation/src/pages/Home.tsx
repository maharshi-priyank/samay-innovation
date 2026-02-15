import Hero from '../components/sections/Hero';
import ServicesHighlight from '../components/sections/ServicesHighlight';
import HorizontalPortfolio from '../components/sections/HorizontalPortfolio';
import Testimonials from '../components/sections/Testimonials';
import Stats from '../components/sections/Stats';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <div>
      <Hero height="full" />
      
      <ServicesHighlight />
      
      <HorizontalPortfolio />
      
      <Testimonials />
      
      <Stats />
      
      <ContactCTA />
    </div>
  );
}
