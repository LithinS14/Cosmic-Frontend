import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Link } from 'react-router-dom';
import '../../styles/components/experience-center.css';

const ExperienceCenter = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="experience-center section">
      <div className="experience-bg">
        <Canvas>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>
      
      <div className="container">
        <motion.div 
          className="experience-content"
          style={{ y, opacity }}
        >
          <div className="experience-text">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Visit Our Experience Center
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Step into our immersive space where fashion meets the cosmos. Our Experience Center offers a unique opportunity to explore our collections in a futuristic environment designed to transport you to another dimension.
            </motion.p>
            
            <motion.ul
              className="experience-features"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>Interactive displays and holographic showcases</li>
              <li>Virtual try-on technology</li>
              <li>Limited edition items exclusive to the center</li>
              <li>Cosmic café with space-themed refreshments</li>
              <li>Regular events and fashion shows</li>
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/experience" className="btn btn-primary">Book A Visit</Link>
            </motion.div>
          </div>
          
          <div className="experience-image">
            <img src="https://images.unsplash.com/photo-1506901437675-cde80ff9c746?q=80&w=1000&auto=format&fit=crop" alt="Experience Center" />
            <div className="experience-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceCenter;