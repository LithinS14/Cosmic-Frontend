import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/explore-section.css';

const ExploreSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="explore-section">
      <motion.div 
        className="explore-content"
        style={{ scale, opacity }}
      >
        <div className="explore-image">
          <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1000&auto=format&fit=crop" alt="Explore the cosmos" />
          <div className="explore-overlay"></div>
        </div>
        
        <div className="explore-text">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore The Cosmic Collection
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Dive into our universe of fashion where each piece tells a story of celestial wonder. From stellar hoodies to nebula-inspired accessories, our collection is designed for those who dare to stand out.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="explore-categories"
          >
            <Link to="/shop/hoodies" className="category-link">Hoodies</Link>
            <Link to="/shop/t-shirts" className="category-link">T-Shirts</Link>
            <Link to="/shop/accessories" className="category-link">Accessories</Link>
            <Link to="/shop/perfumes" className="category-link">Perfumes</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/shop" className="btn btn-primary">Explore Now</Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreSection;