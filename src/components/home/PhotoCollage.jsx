import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/photo-collage.css';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Model in cosmic hoodie'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Fashion model with cosmic style'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    alt: 'Urban cosmic fashion'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop',
    alt: 'Stylish man in cosmic wear'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop',
    alt: 'Cosmic accessories'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop',
    alt: 'Cosmic fashion shoot'
  }
];

const PhotoCollage = () => {
  return (
    <section className="photo-collage section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Cosmic Gallery</h2>
          <p>Explore our universe through fashion</p>
        </motion.div>
        
        <div className="collage-grid">
          {photos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              className={`collage-item item-${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05, zIndex: 2 }}
            >
              <img src={photo.src || "/placeholder.svg"} alt={photo.alt} />
              <div className="collage-overlay">
                <p>{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="collage-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Follow Us On Instagram</a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoCollage;