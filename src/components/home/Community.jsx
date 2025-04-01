import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/community.css';

const communityImages = [
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop'
];

const Community = () => {
  return (
    <section className="community-section section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Join Our Cosmic Community</h2>
          <p>Connect with fellow cosmic explorers and share your style</p>
        </motion.div>
        
        <div className="community-content">
          <div className="community-images">
            {communityImages.map((image, index) => (
              <motion.div 
                key={index}
                className="community-image-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={image || "/placeholder.svg"} alt={`Community member ${index + 1}`} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="community-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Share Your Cosmic Style</h3>
            <p>
              Our community is more than just fashion—it's a movement of like-minded individuals who express themselves through cosmic style. Join thousands of others who are breaking boundaries and exploring new fashion frontiers.
            </p>
            <ul className="community-features">
              <li>Share your outfits with #CosmicStyle</li>
              <li>Get featured on our social media</li>
              <li>Connect with other cosmic explorers</li>
              <li>Participate in exclusive events</li>
              <li>Get early access to new drops</li>
            </ul>
            <div className="community-cta">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Follow Us</a>
              <Link to="/magazine" className="btn btn-secondary">Read Our Magazine</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;