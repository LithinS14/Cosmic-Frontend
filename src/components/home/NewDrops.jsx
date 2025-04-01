import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/new-drops.css';

const products = [
  {
    id: 1,
    name: 'Cosmic Hoodie',
    price: 89.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'Hoodies'
  },
  {
    id: 2,
    name: 'Nebula T-Shirt',
    price: 49.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'T-Shirts'
  },
  {
    id: 3,
    name: 'Galaxy Sweatshirt',
    price: 69.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'Sweatshirts'
  },
  {
    id: 4,
    name: 'Astral Jacket',
    price: 129.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'Jackets'
  }
];

const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className="product-image-container">
        <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="product-image front" />
        <img src={product.images[1] || "/placeholder.svg"} alt={`${product.name} alternate view`} className="product-image back" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <Link to={`/product/${product.id}`} className="product-link">View Product</Link>
    </motion.div>
  );
};

const NewDrops = () => {
  return (
    <section className="new-drops section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">New Drops</h2>
          <p>The latest additions to our cosmic collection</p>
        </motion.div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/shop" className="btn btn-secondary">View All Products</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewDrops;