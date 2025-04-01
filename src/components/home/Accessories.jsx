import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/accessories.css';

const accessories = [
  {
    id: 1,
    name: 'Cosmic Necklace',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Celestial-inspired pendant with purple gemstone'
  },
  {
    id: 2,
    name: 'Galaxy Earrings',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Dangling star-shaped earrings with cosmic design'
  },
  {
    id: 3,
    name: 'Nebula Watch',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Elegant timepiece with space-themed dial'
  }
];

const AccessoryCard = ({ accessory, index }) => {
  return (
    <motion.div 
      className="accessory-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="accessory-image">
        <img src={accessory.images[0] || "/placeholder.svg"} alt={accessory.name} />
      </div>
      <div className="accessory-info">
        <h3>{accessory.name}</h3>
        <p className="accessory-description">{accessory.description}</p>
        <p className="accessory-price">${accessory.price.toFixed(2)}</p>
        <Link to={`/product/${accessory.id}`} className="btn btn-secondary">View Details</Link>
      </div>
    </motion.div>
  );
};

const Accessories = () => {
  return (
    <section className="accessories-section section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Cosmic Accessories</h2>
          <p>Complete your look with our stellar accessories</p>
        </motion.div>
        
        <div className="accessories-grid">
          {accessories.map((accessory, index) => (
            <AccessoryCard key={accessory.id} accessory={accessory} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="accessories-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/shop/accessories" className="btn btn-primary">Explore All Accessories</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Accessories;