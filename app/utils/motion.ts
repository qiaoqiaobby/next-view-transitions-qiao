// Framer Motion variants for animation presets
export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        duration: 0.5,
        delay,
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
};

// Layout animations
export const layoutTransition = {
  layout: {
    type: 'spring',
    damping: 30,
    stiffness: 500,
  },
};

// Card hover animations
export const cardHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: 'easeInOut' } 
  },
  tap: { scale: 0.98 }
};

// Page transition
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 20 
  },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    } 
  },
  exit: { 
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: [0.48, 0.15, 0.25, 0.96]
    } 
  }
}; 