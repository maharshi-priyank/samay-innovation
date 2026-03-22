export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'residential' | 'commercial' | 'hospitality' | 'retail';
  location: string;
  year: number;
  size: string;
  area?: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
  thumbnail: string;
  images: string[];
  description: string;
  challenges?: string;
  solutions?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Arvind Villa No. 6, Khatraj',
    slug: 'arvind-villa-khatraj',
    category: 'residential',
    location: 'Khatraj, Ahmedabad',
    year: 2024,
    size: '4,200 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774166684/samay/arvind-villa-khatraj/nm-08573.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166684/samay/arvind-villa-khatraj/nm-08573.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166687/samay/arvind-villa-khatraj/nm-08578.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166691/samay/arvind-villa-khatraj/nm-08582.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166696/samay/arvind-villa-khatraj/nm-08584.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166700/samay/arvind-villa-khatraj/nm-08588.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166707/samay/arvind-villa-khatraj/nm-08607.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166712/samay/arvind-villa-khatraj/nm-08624.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166719/samay/arvind-villa-khatraj/nm-08627.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166724/samay/arvind-villa-khatraj/nm-08631.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166730/samay/arvind-villa-khatraj/nm-08633.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166735/samay/arvind-villa-khatraj/nm-08641.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166740/samay/arvind-villa-khatraj/nm-08653.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166744/samay/arvind-villa-khatraj/nm-08654.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166749/samay/arvind-villa-khatraj/nm-08658.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166754/samay/arvind-villa-khatraj/nm-08659.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166795/samay/arvind-villa-khatraj/nm-08663.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166800/samay/arvind-villa-khatraj/nm-08666.jpg',
    ],
    description: 'A serene luxury villa defined by pure white interiors, clean lines, and a calming minimalist palette. Every room — from the spacious master suite to the thoughtfully designed children\'s bedroom — balances simplicity with comfort. Subtle cove lighting, custom furniture, and restrained detailing come together to create a home that feels both effortlessly elegant and deeply liveable.',
    challenges: 'Achieving a sense of luxury without visual clutter, while designing distinct spaces for family members with different needs — including a playful yet refined children\'s room.',
    solutions: 'A strict neutral palette with warm cove lighting creates cohesion across all rooms. Custom furniture pieces and curated accents serve as focal points without overwhelming the space.',
    tags: ['Minimalist', 'Villa', 'Luxury', 'Residential', 'White Interiors'],
  },
  {
    id: '2',
    title: 'Venice Bungalows',
    slug: 'venice-bungalows',
    category: 'residential',
    location: 'Anand, Gujarat',
    year: 2023,
    size: '3,500 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774168098/samay/venice-bungalows/01.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168098/samay/venice-bungalows/01.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168103/samay/venice-bungalows/02.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168107/samay/venice-bungalows/03.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168111/samay/venice-bungalows/04.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168114/samay/venice-bungalows/05.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168117/samay/venice-bungalows/06.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168121/samay/venice-bungalows/07.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168126/samay/venice-bungalows/08.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168131/samay/venice-bungalows/09.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168135/samay/venice-bungalows/10.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168141/samay/venice-bungalows/11.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168145/samay/venice-bungalows/12.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168149/samay/venice-bungalows/13.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168163/samay/venice-bungalows/14.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168167/samay/venice-bungalows/15.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168170/samay/venice-bungalows/16.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168174/samay/venice-bungalows/17.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168179/samay/venice-bungalows/18.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168183/samay/venice-bungalows/19.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168187/samay/venice-bungalows/20.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168196/samay/venice-bungalows/21.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168198/samay/venice-bungalows/22.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168201/samay/venice-bungalows/23.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168204/samay/venice-bungalows/24.jpg',
    ],
    description: 'A bold, contemporary bungalow that makes a strong design statement from the moment you enter. The living room features a striking geometric false ceiling with layered cove lighting, a dramatic diagonal wall panel, and a rich dark velvet sectional anchored by a marble-top coffee table with a gold base. The modular kitchen continues the premium theme with dark glossy cabinets, black marble countertops, and under-cabinet accent lighting — a space where style meets function.',
    challenges: 'Designing a high-impact living space that feels cohesive across the living, dining, and kitchen areas while accommodating the client\'s love for bold, expressive design.',
    solutions: 'A carefully chosen palette of dark velvets, warm gold accents, and natural marble creates a unified luxurious feel throughout. The geometric ceiling design ties all spaces together visually.',
    tags: ['Contemporary', 'Bungalow', 'Geometric', 'Premium', 'Luxury Kitchen'],
  },
  {
    id: '3',
    title: 'Indraprashtha Residence',
    slug: 'indraprashtha',
    category: 'residential',
    location: 'Ahmedabad, Gujarat',
    year: 2022,
    size: '2,000 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774166998/samay/indraprashtha/01.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166998/samay/indraprashtha/01.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167003/samay/indraprashtha/02.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167010/samay/indraprashtha/03.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167015/samay/indraprashtha/04.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167047/samay/indraprashtha/06.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167049/samay/indraprashtha/07.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167053/samay/indraprashtha/08.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167056/samay/indraprashtha/09.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167059/samay/indraprashtha/10.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167063/samay/indraprashtha/11.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167068/samay/indraprashtha/12.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167071/samay/indraprashtha/13.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167077/samay/indraprashtha/14.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167084/samay/indraprashtha/15.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167099/samay/indraprashtha/16.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167114/samay/indraprashtha/17.jpg',
    ],
    description: 'A warm, personality-driven apartment where every room tells a story. Rich wooden furniture, textured feature walls, and amber cove lighting create an inviting atmosphere throughout. The highlight is the custom children\'s bedroom — a joyful space with a cobalt blue accent wall, neon personalised name light, and a house-shaped open shelving unit that sparks imagination. This project reflects our belief that good design should feel deeply personal.',
    challenges: 'Designing a home that serves both adults and a child with equal thoughtfulness — balancing warm sophistication in the main spaces with fun and creativity in the kids\' room.',
    solutions: 'Warm wood tones and textured wallpapers unify the adult spaces, while the children\'s room gets its own bold colour story — blue, neon, and custom joinery — that feels exciting without clashing with the rest of the home.',
    tags: ['Warm Contemporary', 'Apartment', 'Personalized', 'Kids Room', 'Wooden Interiors'],
  },
  {
    id: '4',
    title: 'Parijaat Eclat 4BHK',
    slug: 'parijaat-eclat-4bhk',
    category: 'residential',
    location: 'Ahmedabad, Gujarat',
    year: 2024,
    size: '2,500 sq ft',
    status: 'completed',
    featured: false,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774167469/samay/parijaat-eclat-4bhk/nm-00071.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167119/samay/parijaat-eclat-4bhk/nm-00007.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167380/samay/parijaat-eclat-4bhk/nm-00065.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167469/samay/parijaat-eclat-4bhk/nm-00071.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167490/samay/parijaat-eclat-4bhk/nm-00081.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167601/samay/parijaat-eclat-4bhk/nm-00133.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167605/samay/parijaat-eclat-4bhk/nm-00138.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167670/samay/parijaat-eclat-4bhk/nm-00145.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167745/samay/parijaat-eclat-4bhk/nm-00184.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167776/samay/parijaat-eclat-4bhk/nm-00192.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167782/samay/parijaat-eclat-4bhk/nm-00199-copy.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167809/samay/parijaat-eclat-4bhk/nm-00199.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167836/samay/parijaat-eclat-4bhk/nm-00209.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774167886/samay/parijaat-eclat-4bhk/nm-00225.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168044/samay/parijaat-eclat-4bhk/nm-00283.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168051/samay/parijaat-eclat-4bhk/nm-00287.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168056/samay/parijaat-eclat-4bhk/nm-00294.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168064/samay/parijaat-eclat-4bhk/nm-00300.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168074/samay/parijaat-eclat-4bhk/nm-00324.jpg',
    ],
    description: 'An elegant 4BHK apartment defined by rose-gold accents, white marble surfaces, and velvet upholstery. The dining area is a particular standout — a white marble table surrounded by terracotta velvet chairs, framed by a rose-gold partition screen that filters light beautifully. Every detail, from the custom entrance nameplate to the carefully selected material palette, reflects the refined taste of the homeowners.',
    challenges: 'Creating a consistent sense of luxury across a large 4BHK footprint while keeping the design feeling intimate and personal rather than hotel-like.',
    solutions: 'A warm, rose-gold and ivory palette runs through all spaces, while custom millwork and personal touches like the bespoke entrance nameplate make the apartment feel distinctly tailored to its owners.',
    tags: ['Luxury', 'Rose Gold', '4BHK', 'Marble', 'Sophisticated'],
  },
  {
    id: '5',
    title: 'Farmhouse at Rancharda',
    slug: 'farmhouse-rancharda',
    category: 'residential',
    location: 'Rancharda, Ahmedabad',
    year: 2024,
    size: '5,500 sq ft',
    status: 'completed',
    featured: false,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774168974/samay/farmhouse-rancharda/nm-08744.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166805/samay/farmhouse-rancharda/nm-08673.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166836/samay/farmhouse-rancharda/nm-08676.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166844/samay/farmhouse-rancharda/nm-08679.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166850/samay/farmhouse-rancharda/nm-08681.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166857/samay/farmhouse-rancharda/nm-08700.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166968/samay/farmhouse-rancharda/nm-08744.jpg',
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774166974/samay/farmhouse-rancharda/nm-08753.jpg',
    ],
    description: 'The crown jewel of this farmhouse is its dramatic entertainment lounge — a space unlike any other. A sweeping teal and grey marble mural wall forms the backdrop for an arched bar unit lined with individually lit niche displays, colourful decanters, and curated collectibles. Deep red velvet bar stools and a warm wooden beam ceiling with circular pendant lighting complete the atmosphere. Bold, immersive, and utterly unforgettable.',
    challenges: 'Designing an entertainment space grand enough to impress guests while remaining warm and inviting — avoiding the sterile feel of a commercial bar setup.',
    solutions: 'Natural materials — wood, marble, velvet — bring warmth to a dramatic scheme. The arched niches and warm lighting create an intimate atmosphere despite the large scale of the space.',
    tags: ['Farmhouse', 'Entertainment', 'Bar Lounge', 'Dramatic', 'Luxury'],
  },
  {
    id: '6',
    title: 'Ashutosh Kumar 3BHK',
    slug: 'ashutosh-kumar-3bhk',
    category: 'residential',
    location: 'Ahmedabad, Gujarat',
    year: 2023,
    size: '1,600 sq ft',
    status: 'completed',
    featured: false,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774168218/samay/ashutosh-kumar-3bhk/image00013.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168218/samay/ashutosh-kumar-3bhk/image00013.jpg',
    ],
    description: 'A compact 3BHK designed with smart space planning at its core. Clean layouts, functional storage solutions, and a cohesive material palette make this apartment a comfortable and stylish home for a modern family.',
    tags: ['Residential', '3BHK', 'Apartment', 'Smart Design'],
  },
  {
    id: '7',
    title: 'Event Office',
    slug: 'event-office',
    category: 'commercial',
    location: 'Ahmedabad, Gujarat',
    year: 2023,
    size: '1,200 sq ft',
    status: 'completed',
    featured: false,
    thumbnail: 'https://res.cloudinary.com/diojzujpv/image/upload/v1774168222/samay/event-office/nm-00076.jpg',
    images: [
      'https://res.cloudinary.com/diojzujpv/image/upload/v1774168222/samay/event-office/nm-00076.jpg',
    ],
    description: 'A focused, high-performance office workspace designed for efficiency. A custom multi-monitor trading workstation setup in a clean, minimal environment — purpose-built for long hours of precision work.',
    tags: ['Commercial', 'Office', 'Workspace', 'Minimal'],
  },
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug);
};
