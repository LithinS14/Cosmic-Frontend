/**
 * Utility functions for animations throughout the application
 */

// Stagger children animation for lists and grids
export const staggerContainer = (staggerChildren, delayChildren = 0) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  });
  
  // Fade up animation for elements
  export const fadeUp = (duration = 0.5, delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  });
  
  // Fade in animation for elements
  export const fadeIn = (duration = 0.5, delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: "easeInOut"
      }
    }
  });
  
  // Scale animation for elements
  export const scaleUp = (duration = 0.5, delay = 0) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  });
  
  // Slide in from left animation
  export const slideInLeft = (duration = 0.5, delay = 0, distance = 100) => ({
    hidden: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  });
  
  // Slide in from right animation
  export const slideInRight = (duration = 0.5, delay = 0, distance = 100) => ({
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  });
  
  // Bounce animation
  export const bounce = (duration = 0.5, delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: [50, -20, 10, 0],
      transition: {
        duration,
        delay,
        times: [0, 0.6, 0.8, 1],
        ease: "easeOut"
      }
    }
  });
  
  // Rotate in animation
  export const rotateIn = (duration = 0.5, delay = 0) => ({
    hidden: { opacity: 0, rotate: -15, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  });
  
  // Flip animation
  export const flip = (duration = 0.5, delay = 0) => ({
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  });
  
  // Pulse animation (for hover effects)
  export const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
  };
  
  // Hover animations for various elements
  export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };
  
  export const hoverRotate = {
    rotate: 5,
    scale: 1.05,
    transition: { duration: 0.3 }
  };
  
  export const hoverElevate = {
    y: -10,
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 }
  };
  
  // Page transition animations
  export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };
  
  // Scroll-triggered animations
  export const scrollFadeUp = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  export const scrollScale = {
    offscreen: { opacity: 0, scale: 0.9 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Text animations
  export const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };
  
  export const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  // 3D model animations
  export const modelRotation = {
    rotate: [0, 360],
    transition: { duration: 20, repeat: Infinity, ease: "linear" }
  };
  
  export const modelFloat = {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
  };
  
  // Utility function to create custom staggered animations
  export const createStaggeredAnimation = (animation, staggerChildren = 0.1, delayChildren = 0) => {
    return {
      container: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      },
      item: animation
    };
  };