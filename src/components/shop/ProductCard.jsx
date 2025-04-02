"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"
import "../../styles/components/shop/product-card.css"

const ProductCard = ({ product, index, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null)
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (onAddToCart) {
      onAddToCart({
        ...product,
        selectedColor,
        selectedSize,
        quantity: 1,
      })
    }
  }

  const handleAddToWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Add to wishlist functionality
  }

  const toggleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowQuickView(!showQuickView)
  }

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-badges">
          {product.isNew && <span className="badge new-badge">New</span>}
          {product.salePrice && <span className="badge sale-badge">Sale</span>}
        </div>

        <div className="product-image-container">
          <motion.img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="product-image"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {isHovered && (
            <motion.div
              className="product-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="action-btn add-to-cart" onClick={handleAddToCart}>
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
              <button className="action-btn wishlist" onClick={handleAddToWishlist}>
                <Heart size={18} />
              </button>
              <button className="action-btn quick-view" onClick={toggleQuickView}>
                <Eye size={18} />
                <span>Quick View</span>
              </button>
            </motion.div>
          )}
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-category">{product.category}</div>

          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating || 4.5) ? "filled" : "empty"}
                  fill={i < Math.floor(product.rating || 4.5) ? "#ff0033" : "none"}
                  stroke={i < Math.floor(product.rating || 4.5) ? "#ff0033" : "#999"}
                />
              ))}
            </div>
            <span className="review-count">({product.reviews || 0})</span>
          </div>

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

          {product.colors && (
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-swatch ${selectedColor === color ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedColor(color)
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      </Link>

      {showQuickView && (
        <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
          <div className="quick-view-content">
            <button className="close-quick-view" onClick={toggleQuickView}>
              ×
            </button>

            <div className="quick-view-image">
              <img src={product.images[0] || "/placeholder.svg"} alt={product.name} />
            </div>

            <div className="quick-view-details">
              <h3>{product.name}</h3>
              <div className="quick-view-price">${product.price.toFixed(2)}</div>
              <p className="quick-view-category">{product.category}</p>

              <p className="quick-view-description">
                {product.description || "A stylish item from our cosmic collection."}
              </p>

              {product.colors && (
                <div className="quick-view-colors">
                  <h4>Colors:</h4>
                  <div className="color-options">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`color-option ${selectedColor === color ? "selected" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && (
                <div className="quick-view-sizes">
                  <h4>Sizes:</h4>
                  <div className="size-options">
                    {product.sizes.map((size, index) => (
                      <div
                        key={index}
                        className={`size-option ${selectedSize === size ? "selected" : ""}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="quick-view-actions">
                <button className="btn-add-to-cart" onClick={handleAddToCart}>
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="btn-view-details">
                  <Link to={`/product/${product.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ProductCard

