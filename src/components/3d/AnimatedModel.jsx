import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, PerspectiveCamera, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import '../../styles/components/3d/animated-model.css';

// This component renders a 3D model with animations
const AnimatedModel = ({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], animationName = null, autoRotate = false }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions, names } = useAnimations(animations, group);
  
  // Clone the scene to avoid modifying the cached original
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  
  // Apply materials and settings to the model
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Enable shadows
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Improve material quality
        if (child.material) {
          child.material.envMapIntensity = 1.5;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [clonedScene]);
  
  // Play animation if specified
  useEffect(() => {
    if (animationName && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName].fadeOut(0.5);
    } else if (names.length > 0 && actions[names[0]]) {
      // Play the first animation if no specific animation is specified
      actions[names[0]].reset().fadeIn(0.5).play();
      return () => actions[names[0]].fadeOut(0.5);
    }
  }, [actions, animationName, names]);
  
  // Auto-rotate the model if enabled
  useFrame((state, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });
  
  return (
    <group ref={group} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      <primitive object={clonedScene} />
    </group>
  );
};

// This is a wrapper component that sets up the 3D environment
export const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], animationName = null, autoRotate = true, environmentPreset = "city", cameraPosition = [0, 0, 5] }) => {
  return (
    <div className="model-viewer">
      <Canvas shadows dpr={[1, 2]} camera={{ position: cameraPosition, fov: 50 }}>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <AnimatedModel 
          modelPath={modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
          animationName={animationName}
          autoRotate={autoRotate}
        />
        
        <Environment preset={environmentPreset} />
      </Canvas>
    </div>
  );
};

export default AnimatedModel;