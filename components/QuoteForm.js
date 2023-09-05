import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  Flex,
  VStack,
  InputLeftElement,
  InputGroup,
  Icon,
  Heading,
  Select,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import {
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { FaRegUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const QuoteForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [service, setService] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formattedStartDate = startDate ? startDate.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';
    
    const formattedEndDate = endDate ? endDate.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';

    const emailSubject = `Solicitud de cotización de ${name}`;
    const emailText = `Nombre: ${name}
                   Correo electrónico: ${email}
                   Teléfono: ${telephone}
                   Servicio: ${service}
                   Fecha de inicio: ${formattedStartDate}
                   Fecha de fin: ${formattedEndDate}`;

    const formData = {
      to: 'balneario5y6@gmail.com',
      subject: emailSubject, 
      text: emailText,
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
        setName('');
        setEmail('');
        setTelephone('');
        setService('');
        setStartDate(null);
        setEndDate(null);
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
  const borderColor = "#43150A33";

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
      <Heading textAlign="center" mb="1em" textColor="#43150A" fontSize={["3xl", "4xl", "5xl"]}>
        Pedí una cotización
      </Heading>

      <Box
        backgroundColor="white"
        maxW="1000px"
        width="90%"
        margin="auto"
        p="2em"
        borderRadius="8px"
      >
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
                  borderColor={borderColor}
                  _placeholder={{ color: borderColor }}
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
                  borderColor={borderColor}
                  _placeholder={{ color: borderColor }}
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
                  children={<PhoneIcon color={iconColor} />}
                />
                <Input
                  type="tel"
                  name="telephone"
                  placeholder="Teléfono"
                  bg="transparent"
                  border="1px solid"
                  borderColor={borderColor}
                  _placeholder={{ color: borderColor }}
                  borderRadius="50"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <Select
                placeholder="Qué tipo de sombra estás buscando?"
                borderRadius="50"
                borderColor={borderColor}
                _placeholder={{ color: borderColor }}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="Carpa">Carpa</option>
                <option value="Sombrilla">Sombrilla</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel color="#43150A">
                ¿Qué periodo de tiempo querés cotizar?
              </FormLabel>
              <Flex direction="row" justifyContent="space-between">
                <DatePicker
                  selected={startDate}
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Fecha de inicio"
                  className="datePicker"
                  wrapperClassName="dateWrapper"
                />
                <DatePicker
                  selected={endDate}
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Fecha de fin"
                  className="datePicker"
                  wrapperClassName="dateWrapper"
                />
              </Flex>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              bgColor={iconColor}
              width="100%"
              borderRadius="50"
              fontFamily="Leitura Display, serif"
            >
              {isLoading ? <Spinner /> : 'ENVIAR'}
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default QuoteForm;
