import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import PageHeader from '../components/ui/PageHeader';

const categories = ['all', 'Trends', 'Lifestyle', 'Sustainability', 'Design Tips', 'Space Planning', 'Budget Design'];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBlogs = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Blogs" 
        subtitle="INSIGHTS & INSPIRATION"
      />

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-dark-bg-primary border-b border-border-light dark:border-border-dark sticky top-20 z-40 backdrop-blur-md bg-white/95 dark:bg-dark-bg-primary/95">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-xs font-light tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg-primary'
                    : 'border border-text-primary dark:border-dark-text-primary text-text-primary dark:text-dark-text-primary hover:bg-text-primary hover:text-white dark:hover:bg-dark-text-primary dark:hover:text-dark-bg-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-bg-primary overflow-hidden"
              >
                <Link to={`/blogs/${blog.slug}`}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-xs font-light tracking-wider uppercase text-text-primary">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-text-tertiary dark:text-dark-text-tertiary mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-light text-text-primary dark:text-dark-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-xs font-light tracking-wider uppercase text-text-primary dark:text-dark-text-primary group-hover:text-accent-primary transition-colors">
                      Read More
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
                No blogs found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
