import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/pages/shop-all.css';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 't-shirts', name: 'T-Shirts' },
  { id: 'sweatshirts', name: 'Sweatshirts' },
  { id: 'korean-tees', name: 'Korean T-Shirts' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'perfumes', name: 'Perfumes' }
];

const products = [
  {
    id: 1,
    name: 'Cosmic Hoodie',
    price: 89.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'hoodies'
  },
  {
    id: 2,
    name: 'Nebula T-Shirt',
    price: 49.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 't-shirts'
  },
  {
    id: 3,
    name: 'Galaxy Sweatshirt',
    price: 69.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'sweatshirts'
  },
  {
    id: 4,
    name: 'Astral Jacket',
    price: 129.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'hoodies'
  },
  {
    id: 5,
    name: 'Lunar Korean Tee',
    price: 59.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'korean-tees'
  },
  {
    id: 6,
    name: 'Cosmic Necklace',
    price: 39.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'accessories'
  },
  {
    id: 7,
    name: 'Stardust Perfume',
    price: 79.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'perfumes'
  },
  {
    id: 8,
    name: 'Orbit Bracelet',
    price: 29.99,
    images: ['/placeholder.svg?height=600&width=500', '/placeholder.svg?height=600&width=500'],
    category: 'accessories'
  }
];

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <div className="product-image-container">
        <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="product-image front" />
        <img src={product.images[1] || "/placeholder.svg"} alt={`${product.name} alternate view`} className="product-image back" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{categories.find(cat => cat.id === product.category)?.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <Link to={`/product/${product.id}`} className="product-link">View Product</Link>
    </motion.div>
  );
};

const ShopAll = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="shop-page"
    >
      <section className="shop-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shop All
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our cosmic collection of clothing and accessories
          </motion.p>
        </div>
      </section>
      
      <section className="shop-content">
        <div className="container">
          <motion.div 
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </motion.main>
  );
};

export default ShopAll;