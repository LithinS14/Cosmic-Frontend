"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import "../../styles/components/navbar.css"

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Simulate cart items from localStorage
    const cartItems = localStorage.getItem("cartItems")
    if (cartItems) {
      try {
        const items = JSON.parse(cartItems)
        setCartCount(items.length)
      } catch (e) {
        console.error("Error parsing cart items", e)
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (searchOpen) setSearchOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            COSMIC
          </motion.h1>
        </Link>

        {!searchOpen ? (
          <motion.nav
            className={`nav-links ${mobileMenuOpen ? "active" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/shop">shop all.</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/our-story">our story.</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/magazine">magazine.</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/track-order">track order.</Link>
              </motion.li>
            </ul>
          </motion.nav>
        ) : (
          <motion.div
            className="search-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Search size={18} color="rgba(255, 255, 255, 0.7)" />
            <input type="text" placeholder="Search for products..." autoFocus />
            <button onClick={toggleSearch} className="close-search" aria-label="Close search">
              <X size={18} />
            </button>
          </motion.div>
        )}

        <div className="nav-actions">
          <motion.button
            className="search-btn"
            onClick={toggleSearch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Search"
          >
            <Search size={20} />
          </motion.button>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/account" className="account-btn" aria-label="Account">
              <User size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/cart" className="cart-btn" aria-label="Cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </motion.div>

          <motion.button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

