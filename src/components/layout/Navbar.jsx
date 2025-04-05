"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, ChevronDown } from "lucide-react"
import "../../styles/components/navbar.css"

const shopCategories = [
  { id: "all", name: "Shop All", path: "/shop" },
  { id: "hoodies", name: "Hoodies", path: "/shop/hoodies" },
  { id: "t-shirts", name: "T-Shirts", path: "/shop/t-shirts" },
  { id: "sweatshirts", name: "Sweatshirts", path: "/shop/sweatshirts" },
  { id: "korean-tees", name: "Korean T-Shirts", path: "/shop/korean-tees" },
  { id: "accessories", name: "Accessories", path: "/shop/accessories" },
  { id: "perfumes", name: "Perfumes", path: "/shop/perfumes" },
  { id: "new-arrivals", name: "New Arrivals", path: "/shop/new-arrivals" },
]

const Navbar = () => {
  // Add these new state variables at the top of the component
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false)
  const shopDropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // Replace the existing handleScroll function in the first useEffect
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrolled = currentScrollPos > 50

      // Set visibility based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)

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

    // Close mobile menu when route changes
    setMobileMenuOpen(false)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled, location, prevScrollPos])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
        setShopDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (searchOpen) setSearchOpen(false)
  }

  const handleShopMouseEnter = () => {
    setShopDropdownOpen(true)
  }

  const handleShopMouseLeave = () => {
    setShopDropdownOpen(false)
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    // Update the header className to include visibility state
    // Change the header opening tag to:
    <header className={`navbar ${scrolled ? "scrolled" : ""} ${!visible ? "navbar-hidden" : ""}`}>
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
              <motion.li
                className="shop-dropdown-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={handleShopMouseEnter}
                onMouseLeave={handleShopMouseLeave}
                ref={shopDropdownRef}
              >
                <Link to="/shop" className="dropdown-trigger">
                  shop.
                  <ChevronDown size={16} className={`dropdown-arrow ${shopDropdownOpen ? "open" : ""}`} />
                </Link>
                <AnimatePresence>
                  {shopDropdownOpen && (
                    <motion.div

                    className="shop-dropdown"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="shop-dropdown-content">
                      <div className="shop-dropdown-categories">
                        {shopCategories.map((category) => (
                          <motion.div key={category.id} variants={itemVariants} className="shop-category-item">
                            <Link to={category.path}>{category.name}</Link>
                          </motion.div>
                        ))}


                      </div>
                    </div>
                  </motion.div>
                  
                  )}
                </AnimatePresence>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/our-story" className="nav-link">
                  our story.
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/magazine" className="nav-link">
                  magazine.
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/track-order" className="nav-link">
                  track order.
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        ) : (
          // Update the search container JSX to match the floating navbar position exactly
          // Replace the existing search container motion.div with this:
          <motion.div
            className="search-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
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
            {/* <Search size={20} /> */}search
          </motion.button>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/account" className="account-btn" aria-label="Account">
              {/* <User size={20} /> */}account
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/cart" className="cart-btn" aria-label="Cart">
              {/* <ShoppingCart size={20} /> */}carts
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

