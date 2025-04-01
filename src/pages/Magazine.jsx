import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/pages/magazine.css';

const articles = [
  {
    id: 1,
    title: 'The Future of Cosmic Fashion',
    excerpt: 'Exploring the intersection of astronomy and style in the modern fashion landscape.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    category: 'Trends',
    date: 'April 1, 2025'
  },
  {
    id: 2,
    title: 'Behind the Scenes: Spring Collection',
    excerpt: 'An exclusive look at the making of our latest cosmic-inspired collection.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    category: 'Behind the Scenes',
    date: 'March 15, 2025'
  },
  {
    id: 3,
    title: 'Interview with Cosmic Designer',
    excerpt: 'We sit down with our lead designer to discuss inspiration, process, and vision.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
    category: 'Interviews',
    date: 'March 5, 2025'
  },
  {
    id: 4,
    title: 'Sustainable Fashion in the Cosmic Age',
    excerpt: 'How we are working to make our cosmic fashion more environmentally friendly.',
    image: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?q=80&w=1000&auto=format&fit=crop',
    category: 'Sustainability',
    date: 'February 20, 2025'
  },
  {
    id: 5,
    title: 'Style Guide: Mixing Cosmic Pieces',
    excerpt: 'Tips and tricks for incorporating cosmic fashion into your everyday wardrobe.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
    category: 'Style Guide',
    date: 'February 10, 2025'
  },
  {
    id: 6,
    title: 'The History of Space-Inspired Fashion',
    excerpt: 'From the space race to today: how the cosmos has influenced fashion through the decades.',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop',
    category: 'History',
    date: 'January 25, 2025'
  }
];

const Magazine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="magazine-page"
    >
      <section className="magazine-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cosmic Magazine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subtitle"
          >
            Stories from the cosmic fashion universe
          </motion.p>
        </div>
      </section>
      
      <section className="magazine-content">
        <div className="container">
          <div className="featured-article">
            <motion.div 
              className="featured-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" alt="Featured article" />
              <div className="featured-overlay"></div>
            </motion.div>
            
            <motion.div 
              className="featured-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="article-category">Featured</span>
              <h2>The Evolution of Cosmic Fashion</h2>
              <p>
                From the early days of space exploration to the modern cosmic aesthetic, we explore how the universe has shaped fashion trends throughout history and continues to inspire designers today.
              </p>
              <p className="article-date">April 5, 2025</p>
              <Link to="/magazine/evolution-cosmic-fashion" className="btn btn-primary">Read Article</Link>
            </motion.div>
          </div>
          
          <div className="articles-grid">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                className="article-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
              >
                <div className="article-image">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-info">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="article-date">{article.date}</span>
                    <Link to={`/magazine/article/${article.id}`} className="read-more">Read More</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            className="magazine-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Subscribe to Our Magazine</h2>
            <p>Get the latest cosmic fashion news and stories delivered to your inbox</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Magazine;