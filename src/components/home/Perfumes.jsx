"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/perfumes.css"

const perfumes = [
  {
    id: 1,
    name: "Nebula Noir",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "A mysterious blend of dark berries, vanilla, and cosmic musk",
  },
  {
    id: 2,
    name: "Stellar Glow",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Radiant notes of jasmine, amber, and celestial woods",
  },
  {
    id: 3,
    name: "Cosmic Aura",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1724157073080-fcffb8d6c956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZ1bWUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "An ethereal fragrance with notes of lavender, sandalwood, and stardust",
  },
]

const Perfumes = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section ref={containerRef} className="perfumes-section section">
      <div className="perfumes-bg"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Cosmic Fragrances</h2>
          <p>Scents inspired by the mysteries of the universe</p>
        </motion.div>

        <div className="perfumes-showcase">
          {perfumes.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              className="perfume-card"
              style={{ y: index === 0 ? y1 : index === 1 ? y2 : y3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="perfume-image">
  <img src={perfume.image} alt={perfume.name} className="img-front" />
  <img src={perfume.hoverImage} alt={perfume.name + ' alternate'} className="img-back" />
  <div className="perfume-overlay"></div>
</div>

              <div className="perfume-info">
                <h3>{perfume.name}</h3>
                <p className="perfume-description">{perfume.description}</p>
                <p className="perfume-price">${perfume.price.toFixed(2)}</p>
                <Link to={`/product/${perfume.id}`} className="btn btn-secondary">
                  Discover
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="perfumes-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/shop/perfumes" className="btn btn-primary">
            Explore All Fragrances
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Perfumes

