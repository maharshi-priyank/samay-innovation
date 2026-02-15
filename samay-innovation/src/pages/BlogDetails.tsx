import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getBlogBySlug, blogs } from '../data/blogs';

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const blog = getBlogBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-accent-primary hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const relatedBlogs = blogs.filter((_, index) => index !== currentIndex).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Back Button */}
        <Link
          to="/blogs"
          className="absolute top-24 left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ArrowLeft size={20} className="text-white" />
        </Link>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-light tracking-wider uppercase mb-6">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
                {blog.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-text-primary dark:text-dark-text-primary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 pt-8 border-t border-border-light dark:border-border-dark"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <Tag size={20} className="text-text-tertiary dark:text-dark-text-tertiary" />
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-border-light dark:border-border-dark text-xs font-light tracking-wider uppercase text-text-secondary dark:text-dark-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-light text-text-primary dark:text-dark-text-primary mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.article
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white dark:bg-dark-bg-primary overflow-hidden"
                >
                  <Link to={`/blogs/${relatedBlog.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-light text-text-primary dark:text-dark-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
