"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { Star, Heart, Zap, Users, Globe, Sparkles } from "lucide-react"
import "../styles/pages/our-story.css"

const OurStory = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const timelineData = [
    {
      year: 2020,
      title: "The Beginning",
      description:
        "COSMIC was born from a simple yet profound idea: clothing should be as boundless and inspiring as the universe itself. Founded by a group of friends with a shared passion for fashion and astronomy.",
    },
    {
      year: 2021,
      title: "First Collection Launch",
      description:
        "Our debut collection 'Stellar Origins' was released, featuring designs inspired by nebulae, galaxies, and cosmic phenomena. The collection quickly gained popularity among fashion enthusiasts.",
    },
    {
      year: 2022,
      title: "Expansion & Innovation",
      description:
        "We expanded our product line to include accessories and perfumes, all inspired by the cosmos. Our innovative approach to fashion earned us recognition in several fashion publications.",
    },
    {
      year: 2023,
      title: "Global Presence",
      description:
        "COSMIC opened its first physical Experience Center and expanded to international markets. Our community grew to include cosmic explorers from around the world.",
    },
    {
      year: 2024,
      title: "Sustainability Initiative",
      description:
        "We launched our 'Cosmic Responsibility' initiative, focusing on sustainable production methods and materials to reduce our environmental footprint.",
    },
    {
      year: 2025,
      title: "The Future",
      description:
        "Today, we continue to push boundaries with our designs while staying true to our core values. The journey of COSMIC is just beginning, and we invite you to be part of our story.",
    },
  ]

  const values = [
    {
      icon: <Star className="size-8" />,
      title: "Quality",
      description:
        "We are committed to creating clothing that not only looks good but feels good to wear, using high-quality materials that ensure comfort and durability.",
    },
    {
      icon: <Sparkles className="size-8" />,
      title: "Creativity",
      description:
        "Our designs are inspired by the vastness of space, the beauty of nebulae, the mystery of black holes, and the brilliance of stars.",
    },
    {
      icon: <Globe className="size-8" />,
      title: "Sustainability",
      description:
        "We strive to minimize our environmental footprint in every aspect of our production process, using eco-friendly materials and practices.",
    },
    {
      icon: <Users className="size-8" />,
      title: "Community",
      description:
        "COSMIC is more than just a clothing brand; it's a community of like-minded individuals who share a passion for fashion, space, and self-expression.",
    },
    {
      icon: <Heart className="size-8" />,
      title: "Inclusivity",
      description:
        "We believe fashion should be for everyone. Our designs are created with diversity and inclusivity in mind, catering to all body types and preferences.",
    },
    {
      icon: <Zap className="size-8" />,
      title: "Innovation",
      description:
        "We are constantly exploring new techniques, materials, and designs to push the boundaries of fashion and create unique, forward-thinking pieces.",
    },
  ]

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="our-story-page"
    >
      <div className="story-background">
        <Canvas>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <section className="story-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subtitle"
          >
            From cosmic dreams to reality
          </motion.p>
        </div>
      </section>

      <section className="story-content">
        <div className="container">
          <div className="story-grid">
            <motion.div className="story-image" style={{ y: y1 }}>
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Our beginnings"
              />
            </motion.div>

            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>The Beginning</h2>
              <p>
                COSMIC was born from a simple yet profound idea: clothing should be as boundless and inspiring as the
                universe itself. Founded in 2020 by a group of friends with a shared passion for fashion and astronomy,
                we set out to create garments that would embody the mystery and wonder of the cosmos.
              </p>
              <p>
                Our journey began in a small studio, where we experimented with designs that captured the essence of
                celestial bodies, cosmic phenomena, and the infinite expanse of space. We wanted to create more than
                just clothing; we wanted to create wearable art that would inspire and provoke thought.
              </p>
            </motion.div>

            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Philosophy</h2>
              <p>
                At COSMIC, we believe that fashion is a form of self-expression that should transcend conventional
                boundaries. Our designs are inspired by the vastness of space, the beauty of nebulae, the mystery of
                black holes, and the brilliance of stars.
              </p>
              <p>
                We are committed to creating clothing that not only looks good but feels good to wear. Each piece is
                crafted with attention to detail, using high-quality materials that ensure comfort and durability. We
                believe that fashion should be sustainable, which is why we strive to minimize our environmental
                footprint in every aspect of our production process.
              </p>
            </motion.div>

            <motion.div className="story-image" style={{ y: y2 }}>
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop"
                alt="Our philosophy"
              />
            </motion.div>

            <motion.div
              className="story-image full-width"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1506901437675-cde80ff9c746?q=80&w=1000&auto=format&fit=crop"
                alt="Our team"
              />
            </motion.div>

            <motion.div
              className="story-text full-width center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Community</h2>
              <p>
                COSMIC is more than just a clothing brand; it's a community of like-minded individuals who share a
                passion for fashion, space, and self-expression. We believe in fostering a sense of belonging and
                connection among our customers, which is why we regularly host events, workshops, and collaborations
                that bring people together.
              </p>
              <p>
                We are grateful for the support and enthusiasm of our community, which has allowed us to grow and evolve
                over the years. As we continue on our journey, we remain committed to our core values of creativity,
                quality, sustainability, and inclusivity.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="story-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline-line"></div>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-dot">{item.year.toString().slice(2)}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: "var(--spacing-xl)" }}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="story-values"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="story-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Cosmic Journey</h2>
            <p>Explore our collection and become part of our story</p>
            <a href="/shop" className="btn btn-primary">
              Shop Now
            </a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default OurStory

