import Hero from '../components/sections/Hero';
import ServicesHighlight from '../components/sections/ServicesHighlight';
import HorizontalPortfolio from '../components/sections/HorizontalPortfolio';
import Testimonials from '../components/sections/Testimonials';
import Stats from '../components/sections/Stats';
import ContactCTA from '../components/sections/ContactCTA';
import SEO from '../components/seo/SEO';
import { localBusinessSchema, websiteSchema } from '../components/seo/schemas';

export default function Home() {
  return (
    <div>
      <SEO
        title="Samay Innovation — Luxury Interior Designer in Ahmedabad | Award-Winning Firm"
        description="Samay Innovation is an award-winning luxury interior design firm in Ahmedabad, Gujarat. Residential villas, 4BHK flats, farmhouses & commercial interiors. Featured in Forbes, Vogue & De-Mode. Serving Ahmedabad, Gujarat & US clients."
        keywords="interior designer Ahmedabad, luxury interior design Ahmedabad, residential interior designer Gujarat, villa interior design Ahmedabad, 4BHK interior designer Ahmedabad, turnkey interior solutions Gujarat, best interior designer Ahmedabad, interior design firm Gujarat, Seme Nadvi designer, award winning interior designer India, interior designer near me Ahmedabad"
        path="/"
        structuredData={[localBusinessSchema, websiteSchema]}
      />
      <Hero height="full" />
      
      <ServicesHighlight />
      
      <HorizontalPortfolio />
      
      <Testimonials />
      
      <Stats />
      
      <ContactCTA />
    </div>
  );
}
