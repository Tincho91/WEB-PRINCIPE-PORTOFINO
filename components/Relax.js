import React, { useRef, useState } from "react";
import {
  Box,
  useBreakpointValue,
  Heading,
  Grid,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import FadeInFromLeft from "./animations/fadeInFromLeft";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Relax = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageNames = Array.from({ length: 10 }, (_, i) => `relax${i + 1}.png`);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const handleNext = () => {
    slider1.current.slickNext();
    slider2.current.slickNext();
  };

  const handlePrev = () => {
    slider1.current.slickPrev();
    slider2.current.slickPrev();
  };

  const commonSettings = {
    dots: false,
    infinite: true,
    fade: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    draggable: false,
    afterChange: (current) => {
      setCurrentSlide(current);
      if (slider1.current !== null && slider2.current !== null) {
        slider1.current.slickGoTo(current);
        slider2.current.slickGoTo(current);
      }
    },
  };

  const settings1 = { ...commonSettings, initialSlide: 0 };
  const settings2 = { ...commonSettings, initialSlide: 1 };

  const arrowVersion = useBreakpointValue({
    base: "mobile",
    md: "desktop",
  });

  return (
    <Box
      width="100%"
      minH="100%"
      position="relative"
      backgroundColor="#EBDBCA"
      backgroundImage="url('/images/capa1.png')"
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      py="3em"
    >
      <Heading
        as="h1"
        textAlign="center"
        pb="1em"
        color="#43150A"
        fontSize={["3xl", "4xl", "5xl"]}
      >
        Relajate y sentí el
        <Box as="span" position="relative" display="inline-block" ml={5}>
          <FadeInFromLeft id="mar">
            <Text
              as="span"
              fontFamily="Style Script, cursive"
              zIndex="2"
              position="relative"
              color="#BB8D6A"
              fontSize={["5xl", "6xl", "7xl"]}
              fontWeight="400"
            >
              mar
            </Text>
            <Box
              as="span"
              position="absolute"
              bottom="25%"
              left="50%"
              transform="translateX(-50%)"
              width="130%"
              height="25%"
              bg="white"
              zIndex="1"
            ></Box>
          </FadeInFromLeft>
        </Box>
      </Heading>

      <Box maxW="1200px" width="90%" mx="auto" height="100%">
        <Grid
          templateColumns={{ base: "100%", md: "70% 30%" }}
          gap={4}
          position="relative"
          alignItems="center"
        >
          <Box rounded="xl">
            <Slider ref={slider1} {...settings1}>
              {imageNames.map((name) => (
                <Image
                  key={name}
                  src={`/images/${name}`}
                  alt={name}
                  rounded="xl"
                />
              ))}
            </Slider>
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
            rounded="xl"
            position="relative"
          >
            <DesktopArrows
              handleNext={handleNext}
              handlePrev={handlePrev}
              version={arrowVersion}
            />

            <Slider ref={slider2} {...settings2}>
              {imageNames.map((name) => (
                <Image
                  key={name}
                  src={`/images/${name}`}
                  alt={name}
                  rounded="xl"
                />
              ))}
            </Slider>
          </Box>
        </Grid>
      </Box>

      <MobileArrows
        handleNext={handleNext}
        handlePrev={handlePrev}
        version={arrowVersion}
      />
    </Box>
  );
};

function NextArrow({ onClick }) {
  return (
    <Box
      onClick={onClick}
      width="50px"
      height="50px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      ml="1em"
      p={2}
      rounded="full"
      bg="white"
    >
      <Image src="/images/chevron-right.png" alt="Next" />
    </Box>
  );
}

function PrevArrow({ onClick }) {
  return (
    <Box
      onClick={onClick}
      width="50px"
      height="50px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mr="1em"
      p={2}
      rounded="full"
      bg="white"
    >
      <Image src="/images/chevron-left.png" alt="Previous" />
    </Box>
  );
}

function DesktopArrows({ handleNext, handlePrev, version }) {
  if (version !== "desktop") return null;

  return (
    <Flex position="absolute" top={{ base: "35%", lg: "40%" }} zIndex="10">
      <PrevArrow onClick={handlePrev} />
      <NextArrow onClick={handleNext} />
    </Flex>
  );
}

function MobileArrows({ handleNext, handlePrev, version }) {
  if (version !== "mobile") return null;

  return (
    <Flex textAlign="center" justify="center" pt={5}>
      <PrevArrow onClick={handlePrev} />
      <NextArrow onClick={handleNext} />
    </Flex>
  );
}

export default Relax;
