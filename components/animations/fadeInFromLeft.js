import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FadeInFromLeft = ({ id, children }) => {
  const [isInView, setIsInView] = useState(false);

  const scrollHandler = () => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <motion.div
      id={id}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1, transition: { duration: 1 } } : {}}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromLeft;