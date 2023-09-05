import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Spinner, Flex } from "@chakra-ui/react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Relax from "@/components/Relax";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import Contactform from "@/components/ContactForm";
import Rules from "@/components/Rules";
import Newsletter from "@/components/Newsletter";
import Quoteform from "@/components/QuoteForm";
import Services from "@/components/Services";
import ImageList from "@/components/ImagesList";
import Spa from "@/components/Spa";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 2,
  };

  return (
    <Box bg="white">
      {isLoading ? (
        <Flex
          w="full"
          h="full"
          position="fixed"
          top="0"
          left="0"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" color="#36869F" />
        </Flex>
      ) : (
        <>
          <motion.div
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Navbar />
            <Hero />
            <Relax />
            <Services />
            <ImageList />
            <Spa />
            <Quoteform />
            <Newsletter />
            <Rules />
            <Contactform />
            <Map />
          </motion.div>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Index;
