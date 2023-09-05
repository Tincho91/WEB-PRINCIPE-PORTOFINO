import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { darken } from '@chakra-ui/theme-tools';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const emailSubject = "Agregar a la NewsLetter";
    const emailText = `Correo electrónico: ${email}`;
  
    const formData = {
      to: 'balneario5y6@gmail.com',
      subject: emailSubject,
      text: emailText,
      name: '',
      telephone: '',
      service: '',
      startDate: '',
      endDate: ''
    };
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email enviado');
        setEmail('');
      } else {
        toast.error('Error al enviar Email');
      }
    } catch (error) {
      toast.error('Error al enviar Email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      h="350px"
      backgroundImage={{
        base: "linear-gradient(180deg, rgba(229, 249, 255, 0) 0%, rgba(0, 125, 213, 0) 25%, #007DD5 55%), url('/images/bannernl.png')",
        sm: "linear-gradient(270deg, rgba(229, 249, 255, 0) 0%, rgba(0, 125, 213, 0) 25%, #007DD5 55%), url('/images/bannernl.png')"
      }}
      bgPosition="right"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
    >
      <Box w={{ base: "90%", sm: "95%" }} maxW="1200px" mx="auto">
        <Heading fontWeight="bold" color="white" fontSize={["3xl", "4xl", "5xl"]}>
          Sumate al newsletter
        </Heading>
        <Text
          my={4}
          textAlign={{ base: "center", sm: "left" }}
          color="white"
        >
          Recibí las últimas novedades para estar al día de los mejores
          beneficios y promociones.
        </Text>
        <InputGroup
          maxWidth="400px"
          overflow="hidden"
          position="relative"
        >
          <InputLeftElement
            pointerEvents="none"
            alignItems="center"
            height="50px"
          >
            <EmailIcon color="#18404D" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Correo electrónico"
            borderRadius="50"
            height="50px"
            backgroundColor="white"
            zIndex="1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={sendEmail}
            position="absolute"
            height="35px"
            right="2"
            top="50%"
            transform="translateY(-50%)"
            borderRadius="50"
            ml="auto"
            backgroundColor="#18404D"
            color="white"
            zIndex="2"
            fontFamily="Leitura Display, serif"
            _hover={{
              backgroundColor: darken("#18404D", 10),
            }}
          >
            {isLoading ? <Spinner /> : 'ENVIAR'}
          </Button>
        </InputGroup>
        <Text
          my={4}          
          textAlign={{ base: "center", sm: "left" }}
          fontSize='smaller'
          color="white"
        >
          Balnearios 5 y 6 | Complejo Playa Grande | Mar del Plata | Argentina
        </Text>
      </Box>
    </Box>
  );
};

export default Newsletter;
