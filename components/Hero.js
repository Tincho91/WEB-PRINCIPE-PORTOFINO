"use client";

import { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/hero1.png",
    "/images/hero2.png",
    "/images/hero3.png",
    "/images/hero4.png",
    "/images/hero5.png",
    "/images/hero6.png",
    "/images/hero7.png",
  ];

  const customDot = () => <div className="custom-dot"></div>;

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots-1",
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div className={`custom-dot ${i === currentSlide ? "active" : ""}`}></div>
    ),
    afterChange: (current) => setCurrentSlide(current),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    arrows: false,
    draggable: false,
  };

  return (
    <Box
      w="100%"
      h="80vh"
      position="relative"
      bgSize="cover"
      bgPosition="center"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            w="100%"
            h="80vh"
            bgImage={`url(${image})`}
            bgSize="cover"
            bgPosition="center"
            position="relative"
            className={index === currentSlide ? "slide active-slide" : "slide"}
          />
        ))}
      </Slider>
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        width={{ base: "90%", sm: "95%" }}
        maxW="1200px"
        h="80vh"
      >
        <Box
          position="absolute"
          top="10%"
          textAlign={{ base: "center", sm: "center", md: "left" }}
          zIndex={2}
          mx={{ base: "auto", sm: "auto", md: "0" }}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
            color="white"
            mt={10}
            maxWidth={{ base: "100%", sm: "100%", md: "80%", lg: "80%" }}
            mx={{ base: "auto", sm: "auto", md: "0" }}
          >
            En nuestros Balnearios con Spa vas a encontrar diversion para tus hijos, tranquilidad y bienestar para la Familia.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
