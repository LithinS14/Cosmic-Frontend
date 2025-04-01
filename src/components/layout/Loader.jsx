import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import '../../styles/components/loader.css';

const LoaderScene = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial color="#ff0033" emissive="#2d1b4e" metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <Canvas className="loader-canvas">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <LoaderScene />
        </Canvas>
        
        <motion.div 
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>COSMIC</h1>
          <motion.div 
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;