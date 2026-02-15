// Mock project data for Samay Innovation
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
    title: 'Modern Luxury Villa',
    slug: 'modern-luxury-villa',
    category: 'residential',
    location: 'Mumbai, India',
    year: 2024,
    size: '5,000 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1080&fit=crop',
    ],
    description: 'A stunning modern villa featuring clean lines, open spaces, and luxurious finishes. This project showcases our expertise in creating sophisticated living spaces that blend contemporary design with timeless elegance.',
    challenges: 'Working with a challenging hillside location while maximizing natural light and views.',
    solutions: 'Strategic placement of floor-to-ceiling windows and an open-plan design that seamlessly connects indoor and outdoor spaces.',
    tags: ['Modern', 'Luxury', 'Villa', 'Contemporary'],
  },
  {
    id: '2',
    title: 'Executive Office Suite',
    slug: 'executive-office-suite',
    category: 'commercial',
    location: 'New York, USA',
    year: 2024,
    size: '3,500 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop',
    ],
    description: 'An elegant executive office space designed to inspire productivity and impress clients. Features include custom millwork, premium materials, and state-of-the-art technology integration.',
    challenges: 'Creating a professional yet welcoming atmosphere within a limited footprint.',
    solutions: 'Smart space planning with multifunctional areas and strategic use of glass partitions to maintain openness.',
    tags: ['Commercial', 'Office', 'Executive', 'Professional'],
  },
  {
    id: '3',
    title: 'Boutique Hotel Lobby',
    slug: 'boutique-hotel-lobby',
    category: 'hospitality',
    location: 'Goa, India',
    year: 2023,
    size: '2,800 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop',
    ],
    description: 'A breathtaking hotel lobby that captures the essence of coastal luxury. The design incorporates local materials and craftsmanship while maintaining a contemporary aesthetic.',
    challenges: 'Balancing high-traffic durability with luxurious aesthetics.',
    solutions: 'Selection of premium, durable materials with timeless appeal and easy maintenance.',
    tags: ['Hospitality', 'Hotel', 'Lobby', 'Luxury'],
  },
  {
    id: '4',
    title: 'Contemporary Penthouse',
    slug: 'contemporary-penthouse',
    category: 'residential',
    location: 'Dubai, UAE',
    year: 2024,
    size: '4,200 sq ft',
    status: 'completed',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop',
    ],
    description: 'A sophisticated penthouse featuring panoramic city views, custom furniture, and cutting-edge smart home technology. Every detail has been carefully curated to create an unparalleled living experience.',
    challenges: 'Integrating advanced technology while maintaining aesthetic elegance.',
    solutions: 'Seamless technology integration with hidden controls and wireless systems.',
    tags: ['Penthouse', 'Luxury', 'Smart Home', 'Contemporary'],
  },
];

// Get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Get project by slug
export const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug);
};
