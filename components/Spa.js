"use client";

import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import FadeInFromLeft from "@/components/animations/fadeInFromLeft";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spa = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/spa1.png",
    "/images/spa2.png",
    "/images/spa3.png",
    "/images/spa4.png",
    "/images/spa5.png",
    "/images/spa6.png",
    "/images/spa7.png",
    "/images/spa8.png",
    "/images/spa9.png",
    "/images/spa10.png",
  ];

  const customDot = () => <div className="custom-dot"></div>;

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots-2",
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
      h={{ base: "calc(100vh - 42px)", sm: "calc(100vh - 32px)" }}
      position="relative"
      bgImage={`linear-gradient(180deg, rgba(24, 64, 77, 0) 51.62%, #18404D 100%)`}
      bgSize="cover"
      bgPosition="center"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            w="100%"
            h={{ base: "calc(100vh - 42px)", sm: "calc(100vh - 32px)" }}
            bgImage={`linear-gradient(180deg, rgba(24, 64, 77, 0) 51.62%, #18404D 100%), url(${image})`}
            bgSize="cover"
            bgPosition="center"
            position="relative"
            className={index === currentSlide ? "slide active-slide" : "slide"}
          />
        ))}
      </Slider>
      <Box w={{ base: "90%", sm: "95%" }} maxW="1200px" mx="auto">
        <Box position="absolute" bottom="25%" left="5%" maxW="450px" zIndex={2}>
          <Heading
            as="h1"
            pb="1em"
            color="white"
            fontSize={["3xl", "4xl", "5xl"]}
          >
            Relajate y sentí el
            <Box as="span" position="relative" display="inline-block" ml={7}>
              <FadeInFromLeft id="spa-heading">
                <Text
                  as="span"
                  fontFamily="Style Script, cursive"
                  zIndex="2"
                  position="relative"
                  color="white"
                  fontWeight="400"
                  fontSize={["5xl", "6xl", "7xl"]}
                >
                  SPA
                </Text>
                <Box
                  as="span"
                  position="absolute"
                  bottom="25%"
                  left="50%"
                  transform="translateX(-50%)"
                  width="130%"
                  height="25%"
                  bg="#18404D"
                  zIndex="1"
                ></Box>
              </FadeInFromLeft>
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            mt={2}
            fontWeight="400"
          >
            Situado en nuestros balnearios, vas a poder encontrar un cálido y
            lujoso oasis de relajación y tranquilidad. El diseño interior
            combina hábilmente elementos naturales, como maderas cálidas y
            piedras suaves, con sutiles toques de modernidad, creando un
            ambiente equilibrado y armonioso.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Spa;
