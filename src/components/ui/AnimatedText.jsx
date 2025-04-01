import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import '../../styles/components/ui/animated-text.css';

const AnimatedText = ({ 
  text, 
  tag = 'h2', 
  className = '', 
  animation = 'fade', 
  delay = 0, 
  duration = 0.5,
  staggerChildren = 0.03,
  color = null,
  once = true
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, isInView, once]);
  
  // Split text into words and characters for different animation types
  const words = text.split(' ');
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  };
  
  // Different animation types
  const animations = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration }
      }
    },
    typewriter: {
      hidden: { width: 0, opacity: 0 },
      visible: { 
        width: '100%', 
        opacity: 1, 
        transition: { duration: duration * 2 }
      }
    },
    wave: {
      hidden: { y: 0 },
      visible: i => ({
        y: [0, -15, 0],
        transition: {
          delay: delay + (i * staggerChildren),
          duration: duration,
          repeat: 0,
          ease: "easeInOut"
        }
      })
    },
    bounce: {
      hidden: { y: -20, opacity: 0 },
      visible: i => ({
        y: [20, -10, 5, 0],
        opacity: 1,
        transition: {
          delay: delay + (i * staggerChildren),
          duration: duration,
          times: [0, 0.6, 0.8, 1],
          ease: "easeOut"
        }
      })
    },
    glitch: {
      hidden: { opacity: 0 },
      visible: i => ({
        opacity: 1,
        transition: {
          delay: delay + (i * staggerChildren)
        }
      })
    }
  };
  
  // Choose the animation variant based on the animation prop
  const animationVariant = animations[animation] || animations.fade;
  
  // For typewriter animation, we render differently
  if (animation === 'typewriter') {
    const Tag = tag;
    return (
      <Tag 
        ref={ref}
        className={`animated-text typewriter ${className}`}
        style={color ? { color } : {}}
      >
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="typewriter-text"
        >
          <motion.span
            variants={animationVariant}
            className="typewriter-content"
          >
            {text}
          </motion.span>
        </motion.span>
      </Tag>
    );
  }
  
  // For glitch animation, we add special styling
  if (animation === 'glitch') {
    const Tag = tag;
    return (
      <Tag 
        ref={ref}
        className={`animated-text glitch ${className}`}
        style={color ? { color } : {}}
        data-text={text}
      >
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {Array.from(text).map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={animationVariant}
              className="glitch-char"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    );
  }
  
  // For other animations, we split by words
  const Tag = tag;
  return (
    <Tag 
      ref={ref}
      className={`animated-text ${animation} ${className}`}
      style={color ? { color } : {}}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="words-wrapper"
      >
        {words.map((word, i) => (
          <span key={i} className="word">
            {Array.from(word).map((char, j) => (
              <motion.span
                key={j}
                custom={j}
                variants={animationVariant}
                className="char"
              >
                {char}
              </motion.span>
            ))}
            {i !== words.length - 1 && <span className="space">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;