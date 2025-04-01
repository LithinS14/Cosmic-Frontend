"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import "../../styles/components/hero.css"

const SpaceModel = () => {
  const group = useRef()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI / 4
    }

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.01)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <group ref={group} rotation={[0, rotation, 0]}>
      {/* Planet */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#2d1b4e"
          metalness={0.8}
          roughness={0.2}
          emissive="#3d2314"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Rings */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.2, 32, 100]} />
        <meshStandardMaterial
          color="#ff0033"
          metalness={0.9}
          roughness={0.1}
          emissive="#ff0033"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Smaller orbiting moon */}
      <mesh position={[Math.cos(rotation * 2) * 3, Math.sin(rotation * 2) * 0.5, Math.sin(rotation * 2) * 3]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          metalness={0.7}
          roughness={0.3}
          emissive="#00d4ff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Asteroid belt */}
      {Array.from({ length: 50 }).map((_, i) => {
        const angle = (i / 50) * Math.PI * 2
        const radius = 4 + Math.random() * 0.5
        const size = 0.02 + Math.random() * 0.05

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle + rotation * (0.5 + Math.random() * 0.5)) * radius,
              (Math.random() - 0.5) * 0.5,
              Math.sin(angle + rotation * (0.5 + Math.random() * 0.5)) * radius,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          >
            <dodecahedronGeometry args={[size, 0]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#ff6ec7" : i % 3 === 1 ? "#aaa" : "#777"}
              metalness={0.8}
              roughness={0.5}
            />
          </mesh>
        )
      })}
    </group>
  )
}

const FloatingParticles = ({ count = 30 }) => {
  const particles = useRef()
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const newPositions = []
    for (let i = 0; i < count; i++) {
      newPositions.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        size: Math.random() * 0.05 + 0.02,
        speed: Math.random() * 0.01 + 0.005,
        offset: Math.random() * Math.PI * 2,
      })
    }
    setPositions(newPositions)
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.current) {
        particles.current.rotation.y += 0.001
        particles.current.rotation.x += 0.0005
      }
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <group ref={particles}>
      {positions.map((particle, i) => (
        <mesh
          key={i}
          position={[
            particle.x,
            particle.y + Math.sin(Date.now() * particle.speed + particle.offset) * 0.2,
            particle.z,
          ]}
        >
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color={i % 5 === 0 ? "#ff0033" : i % 5 === 1 ? "#00d4ff" : i % 5 === 2 ? "#ff6ec7" : "#ffffff"}
            emissive={i % 5 === 0 ? "#ff0033" : i % 5 === 1 ? "#00d4ff" : i % 5 === 2 ? "#ff6ec7" : "#ffffff"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

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
      window.removeEventListener("scroll", handleScroll)
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
            <span>clothing curated for</span>
            <span className="highlight">cosmic explorers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate your style to interstellar heights with our exclusive collection designed for those who dare to
            stand out. Discover fashion that transcends boundaries and embraces the mysteries of the cosmos.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/shop" className="btn btn-primary">
              Explore Collection
            </a>
            <a href="/our-story" className="btn btn-secondary">
              Our Story
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Unique Designs</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Canvas className="hero-canvas">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
            <SpaceModel />
            <FloatingParticles />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          <div className="model-overlay"></div>

          <div className="hero-floating-elements">
            <motion.div
              className="floating-element element-1"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
            </motion.div>

            <motion.div
              className="floating-element element-2"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
            </motion.div>
          </div>
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

