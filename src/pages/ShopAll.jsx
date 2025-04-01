"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, Filter, ChevronDown, Star } from "lucide-react"
import "../styles/pages/shop-all.css"

const categories = [
  { id: "all", name: "All Products" },
  { id: "hoodies", name: "Hoodies" },
  { id: "t-shirts", name: "T-Shirts" },
  { id: "sweatshirts", name: "Sweatshirts" },
  { id: "korean-tees", name: "Korean T-Shirts" },
  { id: "accessories", name: "Accessories" },
  { id: "perfumes", name: "Perfumes" },
]

const products = [
  {
    id: 1,
    name: "Cosmic Hoodie",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    ],
    category: "hoodies",
    colors: ["#2d1b4e", "#000000", "#3d2314"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
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
    category: "t-shirts",
    colors: ["#ff0033", "#00d4ff", "#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 89,
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
    category: "sweatshirts",
    colors: ["#2d1b4e", "#000000"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 4,
    name: "Astral Jacket",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
    ],
    category: "hoodies",
    colors: ["#000000", "#3d2314"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 42,
    isNew: true,
  },
  {
    id: 5,
    name: "Lunar Korean Tee",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
    ],
    category: "korean-tees",
    colors: ["#ffffff", "#2d1b4e"],
    sizes: ["S", "M", "L"],
    rating: 4.6,
    reviews: 38,
  },
  {
    id: 6,
    name: "Cosmic Necklace",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop",
    ],
    category: "accessories",
    colors: ["#ff0033", "#00d4ff"],
    rating: 4.8,
    reviews: 65,
  },
  {
    id: 7,
    name: "Stardust Perfume",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
    ],
    category: "perfumes",
    rating: 4.9,
    reviews: 87,
    isNew: true,
  },
  {
    id: 8,
    name: "Orbit Bracelet",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop",
    ],
    category: "accessories",
    colors: ["#ff0033", "#00d4ff", "#ffffff"],
    rating: 4.7,
    reviews: 53,
  },
  {
    id: 9,
    name: "Cosmic Oversized Tee",
    price: 54.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    ],
    category: "t-shirts",
    colors: ["#000000", "#ffffff", "#2d1b4e"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 41,
  },
  {
    id: 10,
    name: "Nebula Earrings",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop",
    ],
    category: "accessories",
    colors: ["#ff0033", "#00d4ff"],
    rating: 4.8,
    reviews: 29,
  },
  {
    id: 11,
    name: "Stellar Glow Perfume",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1592945403407-9caf930b0c6b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403407-9caf930b0c6b?q=80&w=600&auto=format&fit=crop",
    ],
    category: "perfumes",
    rating: 4.9,
    reviews: 76,
  },
  {
    id: 12,
    name: "Cosmic Aura Perfume",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
    ],
    category: "perfumes",
    rating: 5.0,
    reviews: 92,
    isNew: true,
  },
]

const ProductCard = ({ product, onAddToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null)
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentImageIndex(0)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1,
    })
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
      transition={{ duration: 0.5 }}
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
          <img
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            className="product-image"
          />

          {isHovered && (
            <div className="product-actions">
              <button className="action-btn add-to-cart" onClick={handleAddToCart}>
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
              <button className="action-btn wishlist" onClick={handleAddToWishlist}>
                <Heart size={18} />
              </button>
              <button className="action-btn quick-view" onClick={toggleQuickView}>
                Quick View
              </button>
            </div>
          )}
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-category">{categories.find((cat) => cat.id === product.category)?.name}</div>

          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? "filled" : "empty"}
                  fill={i < Math.floor(product.rating) ? "#ff0033" : "none"}
                  stroke={i < Math.floor(product.rating) ? "#ff0033" : "#999"}
                />
              ))}
            </div>
            <span className="review-count">({product.reviews})</span>
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
              <p className="quick-view-category">{categories.find((cat) => cat.id === product.category)?.name}</p>

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

const ShopAll = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedColors, setSelectedColors] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    // Filter products based on active category and other filters
    let result = [...products]

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((product) => product.category === activeCategory)
    }

    // Price range filter
    result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter(
        (product) => product.colors && product.colors.some((color) => selectedColors.includes(color)),
      )
    }

    // Sort products
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
      default:
        // Assuming newer products have higher IDs
        result.sort((a, b) => b.id - a.id)
        break
    }

    setFilteredProducts(result)

    // Load cart from localStorage
    const savedCart = localStorage.getItem("cartItems")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Error parsing cart items", e)
      }
    }
  }, [activeCategory, sortBy, priceRange, selectedColors])

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.selectedColor === product.selectedColor &&
        item.selectedSize === product.selectedSize,
    )

    let updatedCart

    if (existingItemIndex >= 0) {
      // Update quantity if item already exists
      updatedCart = [...cartItems]
      updatedCart[existingItemIndex].quantity += 1
    } else {
      // Add new item
      updatedCart = [...cartItems, product]
    }

    setCartItems(updatedCart)
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))

    // Show notification
    alert(`${product.name} added to cart!`)
  }

  const toggleColorFilter = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange]
    newRange[index] = Number(e.target.value)
    setPriceRange(newRange)
  }

  const clearFilters = () => {
    setActiveCategory("all")
    setPriceRange([0, 200])
    setSelectedColors([])
    setSortBy("newest")
  }

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
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
          <div className="shop-header">
            <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>
              <Filter size={18} />
              <span>Filters</span>
              <ChevronDown size={18} className={showFilters ? "rotated" : ""} />
            </button>

            <div className="sort-container">
              <label htmlFor="sort-select">Sort by:</label>
              <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <motion.div
            className={`shop-filters ${showFilters ? "show" : ""}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showFilters ? "auto" : 0,
              opacity: showFilters ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-options">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range-inputs">
                <div className="price-input">
                  <label htmlFor="min-price">Min:</label>
                  <input
                    type="number"
                    id="min-price"
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                  />
                </div>
                <div className="price-input">
                  <label htmlFor="max-price">Max:</label>
                  <input
                    type="number"
                    id="max-price"
                    min={priceRange[0]}
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                  />
                </div>
              </div>
              <div className="price-range-slider">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="range-slider min-slider"
                />
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="range-slider max-slider"
                />
              </div>
            </div>

            <div className="filter-section">
              <h3>Colors</h3>
              <div className="color-filters">
                {["#2d1b4e", "#000000", "#ffffff", "#ff0033", "#00d4ff", "#3d2314"].map((color, index) => (
                  <div
                    key={index}
                    className={`color-filter ${selectedColors.includes(color) ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => toggleColorFilter(color)}
                  ></div>
                ))}
              </div>
            </div>

            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          </motion.div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default ShopAll

