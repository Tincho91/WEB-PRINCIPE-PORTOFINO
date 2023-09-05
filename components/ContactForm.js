import React, { useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  VStack,
  InputLeftElement,
  InputGroup,
  Icon,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { EmailIcon, AttachmentIcon, ChatIcon } from "@chakra-ui/icons";
import { FaRegUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailSubject = `Contacto de ${name}`;
    const emailText = `Nombre: ${name}
                       Correo electrónico: ${email}
                       Asunto: ${subject}
                       Mensaje: ${message}`;

    const formDataToSend = {
      to: "balneario5y6@gmail.com",
      subject: emailSubject,
      text: emailText,
      telephone: "",
      service: "",
      startDate: "",
      endDate: "",
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (response.ok) {
        toast.success('Email enviado');
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error('Error al enviar Email');
      }
    } catch (error) {
      toast.error('Error al enviar Email');
    } finally {
      setIsLoading(false);
    }
  };

  const iconColor = "#43150A";

  const headingVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <Box
      width="100%"
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
    
      <motion.div
        initial="initial"
        animate="animate"
        variants={headingVariants}
      >
        <Heading
          textAlign="center"
          mb="1em"
          color="#43150A"
          fontSize={["3xl", "4xl", "5xl"]}
        >
          Contactanos
        </Heading>
      </motion.div>

      <Box w={{ base: "90%", sm: "95%" }} maxW="1200px" mx="auto">
        <Box backgroundColor="white" borderRadius="8px" p={8}>
          <form onSubmit={sendEmail}>
            <VStack spacing={4} width="95%" margin="auto">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaRegUser} color={iconColor} />}
                  />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    bg="transparent"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="50"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color={iconColor} />}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    bg="transparent"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AttachmentIcon color={iconColor} />}
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    bg="transparent"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="50"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<ChatIcon color={iconColor} />}
                  />
                  <Textarea
                    name="message"
                    placeholder="Mensaje"
                    bg="transparent"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="16"
                    paddingLeft="2.5rem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                bgColor={iconColor}
                width="100%"
                borderRadius="50"
              >
                {isLoading ? <Spinner /> : "ENVIAR"}
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
