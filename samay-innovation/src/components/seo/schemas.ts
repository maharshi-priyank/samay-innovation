/**
 * Reusable JSON-LD schema objects for Samay Innovation.
 * Schema.org vocabulary — validated at https://validator.schema.org
 */

const SITE_URL = 'https://samayinnovation.in';

// ─── LocalBusiness / InteriorDesigner ───────────────────────────────────────

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'InteriorDesigner'],
  '@id': `${SITE_URL}/#business`,
  name: 'Samay Innovation',
  alternateName: 'Samay Innovation Interior Design',
  description:
    'Award-winning luxury interior design firm in Ahmedabad, Gujarat, India. Specialising in residential villas, 4BHK apartments, farmhouses, and commercial spaces. Featured in Forbes, Vogue, and De-Mode.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo.png`,
  image: `${SITE_URL}/assets/images/og-image.jpg`,
  telephone: '+919898524366',
  email: 'info@samayinnovation.in',
  priceRange: '₹₹₹₹',
  currenciesAccepted: 'INR, USD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 104/A, 1st Floor, Shilp The Address, Shilaj Circle',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380059',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0534,
    longitude: 72.5061,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'City', name: 'Anand' },
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
  ],
  hasMap: 'https://goo.gl/maps/itfgxUPvy9dh7Lpq7',
  sameAs: [
    'https://instagram.com/samayinnovation',
    'https://linkedin.com/company/samayinnovation',
    'https://pinterest.com/samayinnovation',
    'https://facebook.com/samayinnovation',
    'https://samayinnovation.in',
  ],
  award: [
    'Most Promising Interior Designer In Asia and UK — House of Commons, London 2022',
    'Best Green Compliant Interior Designer In India — India Excellence Awards, Taj Bangalore 2019',
  ],
  knowsAbout: [
    'Luxury Interior Design',
    'Residential Interior Design',
    'Commercial Interior Design',
    'Turnkey Interior Solutions',
    'Space Planning',
    'Furniture Design',
    '3D Visualisation',
    'Sustainable Design',
  ],
  founder: {
    '@type': 'Person',
    name: 'Seme Nadvi',
    jobTitle: 'Founder & Principal Interior Designer',
    worksFor: { '@id': `${SITE_URL}/#business` },
    award: [
      'Most Promising Interior Designer In Asia and UK 2022',
      'Best Green Compliant Interior Designer In India 2019',
    ],
  },
};

// ─── Website Schema ──────────────────────────────────────────────────────────

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Samay Innovation',
  description: 'Award-winning luxury interior design firm in Ahmedabad, India.',
  publisher: { '@id': `${SITE_URL}/#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/portfolio?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ─── Services Schema ─────────────────────────────────────────────────────────

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Interior Design Services',
  provider: { '@id': `${SITE_URL}/#business` },
  serviceType: 'Interior Design',
  areaServed: [
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Interior Design',
          description:
            'Full-service luxury residential interior design for villas, bungalows, apartments, and farmhouses in Ahmedabad and Gujarat.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Interior Design',
          description:
            'Office and commercial space design solutions tailored to brand identity and workflow efficiency.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Turnkey Interior Solutions',
          description:
            'End-to-end project management — design, procurement, construction, and handover — with zero client hassle.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Visualisation & Concept Design',
          description:
            'Photorealistic 3D renders and mood boards so you see your space exactly as it will look before a single nail is hammered.',
        },
      },
    ],
  },
};

// ─── Breadcrumb helper ───────────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Project / CreativeWork helper ───────────────────────────────────────────

export function projectSchema(project: {
  title: string;
  slug: string;
  description: string;
  location: string;
  year: number;
  thumbnail: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    url: `${SITE_URL}/portfolio/${project.slug}`,
    description: project.description,
    creator: { '@id': `${SITE_URL}/#business` },
    dateCreated: `${project.year}`,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    image: project.thumbnail,
    keywords: project.tags.join(', '),
    genre: 'Interior Design',
  };
}
