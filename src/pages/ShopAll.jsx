"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductGrid from "../components/shop/ProductGrid"
import "../styles/pages/shop-all.css"

const ShopAll = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

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
      dateAdded: "2024-01-01",
      colors: ["#2d1b4e", "#000000"],
      popularity: 10,
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
      dateAdded: "2024-01-05",
      colors: ["#ff0033", "#00d4ff"],
      popularity: 8,
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
      dateAdded: "2023-12-20",
      colors: ["#2d1b4e", "#ffffff"],
      popularity: 6,
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
      dateAdded: "2024-01-10",
      colors: ["#000000", "#3d2314"],
      popularity: 9,
    },
  ]

  const filters = {
    categories: ["Hoodies", "T-Shirts", "Sweatshirts", "Jackets"],
    priceRanges: [
      { label: "Under $50", value: [0, 50] },
      { label: "$50 - $100", value: [50, 100] },
      { label: "$100 - $150", value: [100, 150] },
      { label: "Over $150", value: [150, 200] },
    ],
    colors: ["#2d1b4e", "#000000", "#3d2314", "#ff0033", "#00d4ff", "#ffffff"],
  }

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-low-high" },
    { label: "Price: High to Low", value: "price-high-low" },
    { label: "Popularity", value: "popularity" },
  ]

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
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            <ProductGrid products={products} filters={filters} sortOptions={sortOptions} initialSort="newest" />
          )}
        </div>
      </section>
    </motion.main>
  )
}

export default ShopAll

