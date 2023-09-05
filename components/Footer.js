"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);
  const hoverColor = useColorModeValue("#295a73", "#4a8ca7");

  const handleWhatsApp = () => {
    const phoneNumber = "2236703745";
    const encodedMessage = encodeURIComponent(
      "Hola! Quería hacer una consulta."
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={footerRef}
      as="footer"
      align="center"
      bg="#18404D"
      color="white"
      py="6"
    >
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        w={{ base: "90%", sm: "95%" }}
        maxW="1200px"
        mx="auto"
      >
        <Text mb={{ base: "4", sm: "0" }} textAlign={{ base: "center", sm: "left" }}>
          Balnearios 5 y 6 - Complejo Playa Grande - Mar del Plata, Argentina
        </Text>

        <Flex
          mt={{ base: "4", sm: "0" }}
          ml={{ base: "0", sm: "auto" }}
          alignItems="center"
        >
          <Box mr={3}>
            <Link
              href="balneario5y6@gmail.com"
              aria-label="Escríbenos"
              _hover={{ color: hoverColor }}
            >
              <AiOutlineMail style={{ fontSize: "24px" }} />
            </Link>
          </Box>

          <Box mr={3}>
            <Link
              href="https://goo.gl/maps/7e2RWaz9zovJ57Kv6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nuesta Ubicación"
              _hover={{ color: hoverColor }}
            >
              <MdOutlinePlace style={{ fontSize: "24px" }} />
            </Link>
          </Box>

          <Box mr={3}>
            <Link
              href="https://www.instagram.com/principeyportofino/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our Instagram page"
              _hover={{ color: hoverColor }}
            >
              <AiOutlineInstagram style={{ fontSize: "24px" }} />
            </Link>
          </Box>

          <Button
            onClick={handleWhatsApp}
            bg="transparent"
            p={0}
            position={!isFooterVisible ? "fixed" : "relative"}
            bottom={!isFooterVisible ? "16px" : "0"}
            right={!isFooterVisible ? "16px" : "0"}
            transition="all 0.3s"
            zIndex="10"
            _hover={{ bg: "transparent", transform: 'none' }}
          >
            <Image src="/images/whap.png" alt="WhatsApp" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
