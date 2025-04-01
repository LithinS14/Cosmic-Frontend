import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/shop/product-card.css';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Cycle through product images on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => 
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
      
      return () => clearInterval(interval);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };
  
  // Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -10, transition: { duration: 0.3 } }
  };
  
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };
  
  const infoVariants = {
    hover: { y: -5, transition: { duration: 0.3 } }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="product-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-badge-container">
        {product.isNew && <span className="product-badge new">New</span>}
        {product.isSale && <span className="product-badge sale">Sale</span>}
        {product.isLimited && <span className="product-badge limited">Limited</span>}
      </div>
      
      <Link to={`/product/${product.id}`} className="product-link">
        <motion.div className="product-image" variants={imageVariants}>
          <img 
            src={product.images ? product.images[currentImageIndex] : '/placeholder.svg?height=400&width=300'} 
            alt={product.name} 
          />
          <div className="product-overlay"></div>
        </motion.div>
        
        <motion.div className="product-info" variants={infoVariants}>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          
          <div className="product-price">
            {product.salePrice ? (
              <>
                <span className="sale-price">${product.salePrice.toFixed(2)}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </div>
          
          {product.colors && product.colors.length > 0 && (
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <div 
                  key={index} 
                  className="color-swatch" 
                  style={{ backgroundColor: color }}
                  title={`Color ${index + 1}`}
                ></div>
              ))}
            </div>
          )}
        </motion.div>
      </Link>
      
      <motion.div 
        className="product-actions"
        variants={buttonVariants}
        initial="hidden"
        animate={isHovered ? "hover" : "hidden"}
      >
        <button className="btn-add-cart">Add to Cart</button>
        <button className="btn-wishlist">♥</button>
        <button className="btn-quickview">Quick View</button>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;