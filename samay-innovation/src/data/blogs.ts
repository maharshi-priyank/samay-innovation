export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: '10 Interior Design Trends for 2024',
    slug: '10-interior-design-trends-2024',
    excerpt: 'Discover the latest interior design trends that are shaping homes and commercial spaces in 2024.',
    content: `
      <p>As we move through 2024, interior design continues to evolve with fresh perspectives on sustainability, functionality, and aesthetics. Here are the top 10 trends we're seeing:</p>
      
      <h2>1. Sustainable Materials</h2>
      <p>Eco-friendly materials are no longer optional. Clients are actively seeking bamboo, reclaimed wood, and recycled materials.</p>
      
      <h2>2. Biophilic Design</h2>
      <p>Bringing nature indoors through plants, natural light, and organic materials creates healthier living spaces.</p>
      
      <h2>3. Multifunctional Spaces</h2>
      <p>With remote work becoming permanent, spaces need to serve multiple purposes efficiently.</p>
      
      <h2>4. Bold Colors</h2>
      <p>After years of neutrals, bold jewel tones and rich earth colors are making a comeback.</p>
      
      <h2>5. Smart Home Integration</h2>
      <p>Technology seamlessly integrated into design for convenience and efficiency.</p>
    `,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    author: 'Samay Innovation Team',
    date: '2024-01-15',
    category: 'Trends',
    readTime: '5 min read',
    tags: ['Interior Design', 'Trends', '2024', 'Sustainability'],
  },
  {
    id: '2',
    title: 'The Art of Minimalist Living',
    slug: 'art-of-minimalist-living',
    excerpt: 'Learn how minimalist design principles can create peaceful, functional spaces that enhance your daily life.',
    content: `
      <p>Minimalism isn't about having less—it's about making room for more of what matters. Here's how to embrace minimalist living.</p>
      
      <h2>Understanding Minimalism</h2>
      <p>Minimalist design focuses on simplicity, functionality, and intentional choices.</p>
      
      <h2>Key Principles</h2>
      <p>Clean lines, neutral colors, and purposeful furniture placement create serene environments.</p>
      
      <h2>Benefits</h2>
      <p>Reduced stress, easier maintenance, and enhanced focus on what truly matters.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop',
    author: 'Samay Innovation Team',
    date: '2024-01-10',
    category: 'Lifestyle',
    readTime: '4 min read',
    tags: ['Minimalism', 'Lifestyle', 'Design Philosophy'],
  },
  {
    id: '3',
    title: 'Sustainable Design: More Than a Trend',
    slug: 'sustainable-design-more-than-trend',
    excerpt: 'Why sustainable interior design is essential for the future and how to implement it in your projects.',
    content: `
      <p>Sustainable design is our responsibility to the planet and future generations.</p>
      
      <h2>Why It Matters</h2>
      <p>Environmental impact, health benefits, and long-term cost savings make sustainability essential.</p>
      
      <h2>Implementation</h2>
      <p>Choose eco-friendly materials, energy-efficient solutions, and timeless designs.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
    author: 'Samay Innovation Team',
    date: '2024-01-05',
    category: 'Sustainability',
    readTime: '6 min read',
    tags: ['Sustainability', 'Eco-Friendly', 'Green Design'],
  },
  {
    id: '4',
    title: 'Color Psychology in Interior Design',
    slug: 'color-psychology-interior-design',
    excerpt: 'Understanding how colors affect mood and behavior can transform your interior design approach.',
    content: `
      <p>Colors have a profound impact on our emotions and behaviors. Here's how to use them effectively.</p>
      
      <h2>Warm Colors</h2>
      <p>Reds, oranges, and yellows create energy and warmth, perfect for social spaces.</p>
      
      <h2>Cool Colors</h2>
      <p>Blues, greens, and purples promote calm and focus, ideal for bedrooms and offices.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
    author: 'Samay Innovation Team',
    date: '2023-12-28',
    category: 'Design Tips',
    readTime: '5 min read',
    tags: ['Color Theory', 'Psychology', 'Design Tips'],
  },
  {
    id: '5',
    title: 'Small Space, Big Impact',
    slug: 'small-space-big-impact',
    excerpt: 'Maximize your small space with these clever design strategies and space-saving solutions.',
    content: `
      <p>Small spaces can be just as functional and beautiful as large ones with the right approach.</p>
      
      <h2>Space-Saving Furniture</h2>
      <p>Multi-functional pieces that serve multiple purposes are essential.</p>
      
      <h2>Visual Tricks</h2>
      <p>Mirrors, light colors, and vertical storage create the illusion of more space.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
    author: 'Samay Innovation Team',
    date: '2023-12-20',
    category: 'Space Planning',
    readTime: '4 min read',
    tags: ['Small Spaces', 'Space Planning', 'Design Tips'],
  },
  {
    id: '6',
    title: 'Luxury on a Budget',
    slug: 'luxury-on-budget',
    excerpt: 'Achieve a high-end look without breaking the bank with these budget-friendly design tips.',
    content: `
      <p>Luxury doesn't always mean expensive. Here's how to create an upscale look affordably.</p>
      
      <h2>Strategic Investments</h2>
      <p>Invest in key pieces and save on accessories and decor.</p>
      
      <h2>DIY Solutions</h2>
      <p>Many high-end looks can be achieved with DIY projects and creativity.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    author: 'Samay Innovation Team',
    date: '2023-12-15',
    category: 'Budget Design',
    readTime: '5 min read',
    tags: ['Budget', 'Luxury', 'Design Tips'],
  },
];

export const getBlogBySlug = (slug: string) => {
  return blogs.find((blog) => blog.slug === slug);
};

export const getBlogsByCategory = (category: string) => {
  if (category === 'all') return blogs;
  return blogs.filter((blog) => blog.category === category);
};
