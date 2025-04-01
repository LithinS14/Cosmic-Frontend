"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart } from "lucide-react"
import "../../styles/components/new-drops.css"

const products = [
  {
    id: 1,
    name: "Cosmic Hoodie",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Hoodies",
    isNew: true,
  },
  {
    id: 2,
    name: "Nebula T-Shirt",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    ],
    category: "T-Shirts",
    isNew: true,
  },
  {
    id: 3,
    name: "Galaxy Sweatshirt",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Sweatshirts",
  },
  {
    id: 4,
    name: "Astral Jacket",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Jackets",
    isNew: true,
  },
]

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-badges">
        {product.isNew && <span className="badge new-badge">New</span>}
        {product.salePrice && <span className="badge sale-badge">Sale</span>}
      </div>

      <div className="product-image-container">
        <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="product-image front" />
        <img
          src={product.images[1] || "/placeholder.svg"}
          alt={`${product.name} alternate view`}
          className="product-image back"
        />

        {isHovered && (
          <div className="product-actions">
            <button className="action-btn add-to-cart">
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
            <button className="action-btn wishlist">
              <Heart size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>

      <Link to={`/product/${product.id}`} className="product-link">
        View Product
      </Link>
    </motion.div>
  )
}

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
          <Link to="/shop" className="btn btn-secondary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NewDrops

