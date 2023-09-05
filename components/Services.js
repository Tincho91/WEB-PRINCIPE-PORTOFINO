import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Icon,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import FadeInFromLeft from "@/components/animations/fadeInFromLeft";

const Services = () => {
  const items = [
    {
      image: "/icons/carpasysombrillas.png",
      title: "Alquiler de carpas y sombrillas",
      list: [
        "Amplios pasillos con pasarela de piso atérmico, carpas con 5 sillas, 1 mesa grande mas mesa de apoyo, 1 tumbona, cofre de seguridad, capacidad máxima 6 personas.",
        "Sombrillas con 4 sillas ,1 mesa grande, 1 tumbona, capacidad máxima 4 personas.",
      ],
    },
    {
      image: "/icons/accesibilidad.png",
      title: "Accesibilidad",
      list: [
        "Rampas de acceso desde la calle hasta el Balneario.",
        "Vestuarios y baños de familia adaptados, silla anfibia para mar y pileta.",
      ],
    },
    {
      image: "/icons/prevencion.png",
      title: "Prevención",
      list: [
        "Control en los accesos, servicio médico y guardavidas.",
        "Espacio cardioprotegido.",
      ],
    },
    {
      image: "/icons/spa.png",
      title: "SPA",
      list: [
        "Los clientes que alquilen periodo superior a quincena tendrán bonificado el uso del Spa, los clientes con una fracción inferior a quincena podrán utilizar el Spa con cargo.",
        "El Spa cuenta con sauna húmedo, sauna seco, ducha escocesa, jacuzzi, cama de burbujas, cascadas descontracturantes, camas de relajación.",
      ],
    },
    {
      image: "/icons/piscinas.png",
      title: "Piscinas",
      list: [
        "Amplia piscina para toda la familia con solarium y piscina infantil con juegos de agua.",
      ],
    },
    {
      image: "/icons/recreacion.png",
      title: "Recreación",
      list: [
        "Cancha de beach volley, aros de basket, cancha de futbol-tenis y rincón infantil con recreación.",
      ],
    },
    {
      image: "/icons/sanitarios.png",
      title: "Sanitarios",
      list: [
        "Amplios baños y vestuarios con agua caliente, cambiadores individuales, bañeras y cambiadores de bebés y servicio de lockers.",
      ],
    },
    {
      image: "/icons/comercios.png",
      title: "Locales comerciales",
      list: [
        "Acceso directo al Paseo Comercial de Playa Grande donde encontrara variedad de oferta gastronómica.",
      ],
    },
    {
      image: "/icons/cabinas.png",
      title: "Cabinas",
      list: [
        "Disponemos de alquiler de cabinas privadas con diferente equipamiento, (simples, con ducha, con bañera, con bañera y sanitarios) en todos los casos con servicio de toallas incluido. ",
      ],
    },
  ];

  return (
    <Box w="100%" py="3em">
      <Box w={{ base: "90%", sm: "95%" }} maxW="1200px" mx="auto">
        <Heading
          textAlign="center"
          mb={5}
          color="#18404D"
          fontSize={["3xl", "4xl", "5xl"]}
        >
          Nuestros servicios e intalaciones
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          {/* Column 1 */}
          <Box w={{ base: "100%", md: "48%" }} mb={{ base: 5, md: 0 }}>
            <FadeInFromLeft id="animatedElement1">
              {items.slice(0, 4).map((item, index) => (
                <Box key={index} mb={5}>
                  <Image src={item.image} boxSize="24px" mb={3} />
                  <Heading size="md" textAlign="left" color="#18404D" mb={3}>
                    {item.title}
                  </Heading>
                  <List spacing={1} styleType="none">
                    {item.list.map((listItem, listIndex) => (
                      <ListItem key={listIndex}>
                        <Flex alignItems="center">
                          <Icon as={CheckIcon} color="#36869F" mr={5} />
                          <Text
                            display="inline"
                            color="#18404D"
                            fontWeight="400"
                          >
                            {listItem}
                          </Text>
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </FadeInFromLeft>
          </Box>

          {/* Column 2 */}
          <Box w={{ base: "100%", md: "48%" }}>
            <FadeInFromLeft id="animatedElement2">
              {items.slice(4, 9).map((item, index) => (
                <Box key={index} mb={5}>
                  <Image src={item.image} boxSize="24px" mb={3} />
                  <Heading size="md" textAlign="left" color="#18404D" mb={3}>
                    {item.title}
                  </Heading>
                  <List spacing={1} styleType="none">
                    {item.list.map((listItem, listIndex) => (
                      <ListItem key={listIndex}>
                        <Flex alignItems="center">
                          <Icon as={CheckIcon} color="#36869F" mr={5} />
                          <Text display="inline" color="#18404D">
                            {listItem}
                          </Text>
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </FadeInFromLeft>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Services;
