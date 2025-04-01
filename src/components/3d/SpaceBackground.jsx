import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import '../../styles/components/space-background.css';

const SpaceSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <mesh ref={meshRef} scale={[30, 30, 30]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        color="#2d1b4e"
        side={THREE.BackSide}
        metalness={0.8}
        roughness={0.5}
      />
    </mesh>
  );
};

const FloatingParticles = ({ count = 100 }) => {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      const size = Math.random() * 0.5 + 0.1;
      temp.push({ x, y, z, size });
    }
    return temp;
  }, [count]);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });
  
  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[particle.size, 16, 16]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#ff0033" : i % 3 === 1 ? "#3d2314" : "#2d1b4e"}
            emissive={i % 3 === 0 ? "#ff0033" : i % 3 === 1 ? "#3d2314" : "#2d1b4e"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div className="space-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <SpaceSphere />
        <FloatingParticles />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;