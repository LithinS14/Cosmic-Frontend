"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import "../../styles/components/hero.css"

const Hero = () => {
  useEffect(() => {
    // Create star field
    const createStars = () => {
      const starsContainer = document.createElement("div")
      starsContainer.className = "stars-container"
      document.body.appendChild(starsContainer)

      for (let i = 0; i < 200; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.width = `${Math.random() * 2 + 1}px`
        star.style.height = star.style.width
        star.style.left = `${Math.random() * 100}vw`
        star.style.top = `${Math.random() * 100}vh`
        star.style.setProperty("--twinkle-duration", `${Math.random() * 3 + 2}s`)
        star.style.setProperty("--twinkle-delay", `${Math.random() * 5}s`)
        starsContainer.appendChild(star)
      }
    }

    createStars()

    return () => {
      const starsContainer = document.querySelector(".stars-container")
      if (starsContainer) {
        document.body.removeChild(starsContainer)
      }
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>Cosmic Collection 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="highlight">cosmic explorers</span>
            <span className="subtitle">Elevate your style beyond the stars</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            Discover our exclusive collection designed for those who dare to stand out. Clothing that transcends
            boundaries and embraces the mysteries of the cosmos.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/shop" className="btn btn-primary">
              Explore Collection
              <ArrowRight size={16} className="btn-icon" />
            </Link>

            <Link to="/our-story" className="btn btn-secondary">
              Our Story
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginBottom: "3rem" }}
          >
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Unique Designs</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            },
          }}
          whileHover={{
            scale: 1.03,
            rotateY: 5,
            transition: { duration: 0.5 },
          }}
        >
          <div className="image-container">
            <img
              src="src\assets\pexels-vika-glitter-392079-23232336.jpg"
              alt="Cosmic Explorer"
              className="hero-main-image"
              animate={{
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="image-glow"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>

            {/* Add particle effect overlay */}
            <motion.div
              className="particle-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 1 }}
            ></motion.div>
          </div>
          <motion.div
            className="hero-image-overlay"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(45, 27, 78, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)",
                "linear-gradient(135deg, rgba(61, 35, 20, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)",
                "linear-gradient(135deg, rgba(45, 27, 78, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)",
              ],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          ></motion.div>

          <motion.div
            className="floating-element element-1"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="element-content">
              <span className="element-label">New</span>
              <span className="element-text">Cosmic Explorer Collection</span>
            </div>
          </motion.div>

          {/* Add a second floating element */}
          <motion.div
            className="floating-element element-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <div className="element-content">
              <span className="element-label">Limited</span>
              <span className="element-text">Cosmic Edition</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <motion.div
            className="scroll-icon"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <svg width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="28" height="48" rx="14" stroke="white" strokeWidth="2" />
              <circle className="scroll-circle" cx="15" cy="15" r="5" fill="white" />
            </svg>
          </motion.div>
          <p>Scroll to Explore</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

