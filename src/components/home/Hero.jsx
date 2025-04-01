import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import '../../styles/components/hero.css';

const SpaceModel = () => {
  const group = useRef();
  
  useEffect(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI / 4;
    }
  }, []);
  
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#2d1b4e"
          metalness={0.8}
          roughness={0.2}
          emissive="#3d2314"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.2, 16, 100]} />
        <meshStandardMaterial 
          color="#ff0033"
          metalness={0.9}
          roughness={0.1}
          emissive="#ff0033"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
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
            Elevate your style to interstellar heights with our exclusive collection designed for those who dare to stand out.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/shop" className="btn btn-primary">Explore Collection</a>
            <a href="/our-story" className="btn btn-secondary">Our Story</a>
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
            <SpaceModel />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Canvas>
          <div className="model-overlay"></div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <p>Scroll Down</p>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;