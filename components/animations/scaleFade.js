import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScaleFade = ({ id, children }) => {
  const [isInView, setIsInView] = useState(false);

  const scrollHandler = () => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <motion.div
      id={id}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1, transition: { duration: 0.8 } } : {}}
    >
      {children}
    </motion.div>
  );
};

export default ScaleFade;