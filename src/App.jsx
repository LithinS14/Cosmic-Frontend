"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

// Layout Components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Loader from "./components/layout/Loader"

// Pages
import Home from "./pages/Home"
import ShopAll from "./pages/ShopAll"
import OurStory from "./pages/OurStory"
import Magazine from "./pages/Magazine"
import TrackOrder from "./pages/TrackOrder"
import Account from "./pages/Account"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Terms from "./pages/Terms"
import Policy from "./pages/Policy"
import ShippingPolicy from "./pages/ShippingPolicy"
import Returns from "./pages/Returns"

// Styles
import "./styles/global.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopAll />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/magazine" element={<Magazine />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/account" element={<Account />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/shipping" element={<ShippingPolicy />} />
              <Route path="/returns" element={<Returns />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </Router>
  )
}

export default App

