import { useRef, useState, useEffect } from "react";

import { CheckIcon, AttachmentIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import FadeInFromLeft from "@/components/animations/fadeInFromLeft";

const Rules = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalRef = useRef();
  const contentRef = useRef();

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      const modalHeight = modalRef.current.clientHeight;
      const contentHeight = contentRef.current.scrollHeight;

      setTotalPages(Math.ceil(contentHeight / modalHeight));
    }
  }, [isOpen]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (contentRef.current && modalRef.current) {
      contentRef.current.scrollTop =
        (currentPage - 1) * modalRef.current.clientHeight;
    }
  }, [currentPage]);

  return (
    <Box py={10}>
      <Box w={{ base: "90%", sm: "95%" }} maxW="1200px" mx="auto">
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ base: "left", md: "center" }}
        >
          <Box
            flex="1"
            pr={{ md: 4 }}
            textAlign="left"
            mb={{ base: "6", md: "3" }}
          >
            <Heading mb={3} color="#18404D" fontSize="3xl">
              Horarios de atención
            </Heading>
            <FadeInFromLeft id="horarios-de-atencion">
              <List spacing={2} styleType="none">
                <ListItem display="flex" alignItems="center">
                  <CheckIcon color="#36869F" boxSize={4} mr={2} />
                  Desde el 01/09 hasta el 12/10 - Todos los días de 13h a 17h
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <CheckIcon color="#36869F" boxSize={4} mr={2} />
                  Desde el 12/10 hasta el 30/11 - Todos los días de 11h a 17h
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <CheckIcon color="#36869F" boxSize={4} mr={2} />
                  Desde el 30/11 hasta semana Santa - Todos los días de 9h a 19h
                </ListItem>
              </List>
            </FadeInFromLeft>
          </Box>
          <Box
            flex="1"
            pr={{ md: 4 }}
            textAlign="left"
            mb={{ base: "6", md: "3" }}
          >
            <Heading mb={3} color="#18404D" fontSize="3xl">
              Formas de pago*
            </Heading>
            <FadeInFromLeft id="formas-de-pago">
              <List spacing={2} styleType="none">
                <ListItem display="flex" alignItems="center">
                  <CheckIcon color="#36869F" boxSize={4} mr={2} />
                  Efectivo, cheque, transferencia o depósito bancario
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <CheckIcon color="#36869F" boxSize={4} mr={2} />
                  Financiación personal
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <CheckIcon color="#36869F" boxSize={4} mr={2} />
                  Tarjetas de crédito y débito
                </ListItem>
              </List>
            </FadeInFromLeft>
          </Box>
        </Box>

        <Box mt={5}>
          <Link
            color="blue.500"
            onClick={onOpen}
            display="flex"
            alignItems="center"
          >
            <AttachmentIcon mr="2" color="#18404D" fontSize="2xl" />
            <Heading color="#18404D" fontSize="3xl">
              Reglamento del balneario y la piscina
            </Heading>
          </Link>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent ref={modalRef} height="80vh">
              <ModalCloseButton />
              <ModalBody ref={contentRef} overflowY="auto">
                <Box>
                  <Image
                    src="/images/logonav.png"
                    alt="Brand Logo"
                    w="auto"
                    mx="auto"
                    h={{ base: "45px", md: "60px" }}
                    my="5"
                    _hover={{
                      transform: "scale(1.01)",
                      transition: "transform 0.3s",
                    }}
                  />

                  <Heading fontSize="xl" my={5} textAlign="center">
                    Rules BALNEARIOS PRINCIPE Y PORTOFINO
                  </Heading>

                  <Text>
                    El periodo de temporada alta se extiende desde el 1 de
                    diciembre al 31 de marzo de cada año. Durante este lapso de
                    tiempo los Balnearios Príncipe y Portofino se comprometen a
                    brindar todos los servicios contratados en el alquiler de
                    carpas, sombrillas, piletas, lockers, duchas, sanitarios y
                    servicio de gastronomía y rubros anexos a este, excepto la
                    recreación, que solo se realizara durante Enero y Febrero.
                    En los periodos denominados temporada intermedia (desde el
                    12 de octubre hasta el 30 de noviembre y desde el 1 de abril
                    hasta el domingo de semana santa, en caso de que esta última
                    sea en el mes de abril) se prestaran servicios mínimos
                    (baños y duchas) y el balneario podrá reubicar a los
                    clientes en otra unidad de sombra que la contratada. En el
                    periodo de temporada alta se respetarán las unidades
                    asignadas salvo caso de fuerza mayor (por ejemplo refulado
                    de arena, temporal o vendaval, pandemias).
                    <br></br>
                    El alquiler se efectuará a título personal e intransferible,
                    teniendo los titulares de la temporada anterior prioridad
                    para la elección de la misma unidad hasta el 30 de
                    septiembre previo al inicio de la temporada. Pasada dicha
                    fecha y no habiendo sido confirmada con seña del 30% del
                    total del alquiler, el Balneario podrá disponer de la unidad
                    para la locación a otro cliente. Los titulares de las
                    unidades que arriben antes o soliciten retirarse después del
                    periodo contratado tendrán que abonar la diferencia de esos
                    días. La empresa dispondrá de un sistema de identificación
                    para el control de los accesos a los distintos espacios del
                    balneario. Su uso es obligatorio.
                    <br></br>
                    Las personas que ocupen las carpas o sombrillas deberán
                    respetar los límites de las mismas, como así también en todo
                    momento deberán cuidar el buen trato y habla, la cantidad
                    máxima de personas por carpa es de seis (6) y en sombrillas
                    cuatro (4). El cliente que exceda este número por unidad,
                    deberá gestionar una comodidad adicional. El balneario
                    autoriza un séptimo u octavo integrante con autorización
                    previa de la administración.
                    <br></br>
                    Las carpas se alquilan con 5 sillas, 1 mesa grande, 1 mesa
                    de apoyo, 1 tumbona y un cofre de seguridad y las sombrillas
                    con 4 sillas, 1 mesa grande y una tumbona. Las mesas y
                    sillas del balneario no podrán ser llevadas fuera sus
                    límites, con expresa prohibición de trasladarlas a la orilla
                    del mar.
                    <br></br>
                    El cofre que se encuentra en las carpas está bonificado con
                    el alquiler de la unidad. La provisión del candado estará a
                    cargo del titular de la carpa debiendo quedar desocupado al
                    finalizar cada jornada. La ubicación del mismo es fija, está
                    prohibido moverlo del lugar asignado por la administración.
                    <br></br>
                    No deberán levantarse divisiones de carpas, ni modificar su
                    estructura, las sombrillas deben conservar su posición
                    original. Será responsabilidad de los titulares de la
                    comodidad contratada dejarla en condiciones para su limpieza
                    antes de retirarse del establecimiento (sin pozos, sin
                    juguetes en el piso, basura tirada, entre otros). Dentro de
                    los límites del balneario no se permite instalar sombrillas
                    particulares.
                    <br></br>
                    No está permitido ingresar al sector arena con bicicletas,
                    motocicletas, cuatriciclos, kayak, botes, tablas de surf o
                    cualquier tipo de rodado, reproductores de música sin
                    auriculares, garrafas, anafes, choperas y cualquier otro
                    elemento que no esté estrictamente autorizado por el
                    balneario.
                    <br></br>
                    No está permitido el juego de pelotas en cualquiera de sus
                    formas, para tal fin el Balneario cuenta con lugares
                    habilitados. No está permitido el uso de cualquier tipo de
                    rodado (incluido juguetes como camiones empujados por niños)
                    en espacios de circulación general y pasillos entre unidades
                    de sombra. Se encuentra prohibido el uso de juegos,
                    implementos o materiales peligrosos, elementos contundentes
                    y todo acto contrario a la moral y las buenas costumbres.
                    <br></br>
                    El ingreso de niños varones a los vestuarios de damas o
                    viceversa está permitido hasta los cuatro (4) años de edad,
                    acompañados por un adulto femenino o masculino en su caso.
                    Por motivos de seguridad e higiene el ingreso a los
                    vestuarios deberá ser calzado y sin arena. Los niños deberán
                    ser acompañados por un adulto en la permanencia y uso de los
                    vestuarios.
                    <br></br>
                    Está prohibido entrar al Balneario con animales de acuerdo a
                    lo que indica la Ordenanza Municipal 15.642, si necesitase
                    ingresar a las instalaciones con un animal de compañía
                    terapéutica deberá avisar en la administración y presentar
                    la documentación correspondiente certificando que es un
                    animal de compañía terapéutica, sin excepción.
                    <br></br>
                    El acceso a las duchas y vestuarios y sector de piletas es
                    exclusivo para el titular y su grupo familiar. Solicitamos
                    extrema prudencia en el uso de duchas evitando derroches y
                    excesos innecesarios. El Balneario deslinda toda
                    responsabilidad por falta de electricidad, agua o gas, si
                    los mismos no son prestados debidamente por las empresas
                    proveedoras de los servicios.
                    <br></br>
                    En el periodo de carnaval está prohibido cargar baldes y
                    llenar bombitas con agua de los vestuarios, también está
                    prohibido el juego de carnaval dentro del balneario. Por
                    razones de seguridad no deben dejarse pertenencias solas en
                    ninguno de los sectores. El Balneario y su personal deslinda
                    responsabilidad por robo, hurto o extravío, esto se hace
                    extensivo a aquellos objetos guardados en el pañol de
                    carperos.
                    <br></br>
                    El Balneario se reserva el derecho de admisión y
                    permanencia.
                    <br></br>
                    En caso de roturas deliberadas de objetos como vidrios,
                    reposeras, juegos, lonas, escrituras en paredes o lonas o
                    daños de cualquier otro tipo se cobrará al responsable de
                    los mismos (en caso de ser menor de edad a sus padres o
                    titular de la carpa) el valor correspondiente al daño
                    causado. Durante el periodo de alquiler podrán surgir
                    cambios en el armado de las carpas y sombrillas alquiladas,
                    debiéndose el cliente reubicarse en la unidad que designe el
                    balneario.
                    <br></br>
                    El Balneario no guarda, ni se hace responsable de las
                    pertenencias que no fueran retiradas al final de cada
                    temporada (31 de marzo). Aquellos objetos abandonados serán
                    donados a entidades de beneficencia.
                    <br></br>
                    Los clientes que esperen invitados, deben dar previo aviso
                    en la administración para que se les permita acceder al
                    balneario, el ingreso se realizará por la puerta principal
                    sin excepciones. Si la presencia de los invitados supera el
                    cupo permitido se deberá alquilar otra unidad de sombra.
                    <br></br>
                    Los Balnearios Príncipe y Portofino tienen pleno derecho a
                    realizar, ofrecer o contratar eventos deportivos, shows
                    musicales, acciones publicitarias y cualquier otra actividad
                    que considere apta, las que podrán ser acompañadas con
                    música a través de parlantes en los casos que el espectáculo
                    lo requiera y en los horarios asignados.
                    <br></br>
                    Los precios publicados en todos los rubros son indicativos y
                    pueden ser modificados sin previo aviso. Cualquier cuestión
                    climatológica (lluvias, temporales, tormentas, mal clima en
                    general) no dan derecho a solicitar la devolución del dinero
                    en cualquiera de los periodos reservados. El no uso de la
                    unidad de sombra no significa eximición de pago.
                  </Text>

                  <Heading fontSize="xl" my={5} textAlign="center">
                    Rules SECTOR PISCINA
                  </Heading>

                  <Text>
                    La Administración se reserva el derecho de admisión y
                    permanencia de las personas que no cumplan con las
                    siguientes normas:
                    <br></br>
                    El guardavidas es la autoridad máxima de este sector,
                    debiendo todos los asistentes acatar sus órdenes y está
                    prohibido el ingreso si él no está presente. Los bañistas
                    deben ducharse antes de ingresar a las piletas.
                    <br></br>
                    Los bebés solo pueden ingresar a las piletas con pañales
                    descartables para agua.
                    <br></br>
                    Está prohibido correr, tirarse de los bordes de la pileta,
                    salpicar y perturbar la tranquilidad de los demás. No está
                    permitido comer, tomar mate, beber, fumar o utilizar envases
                    de vidrio.
                    <br></br>
                    En caso de tormentas no se podrá permanecer en el sector
                    hasta que el guardavidas lo autorice.
                    <br></br>
                    No se permite el ingreso con pelotas, colchonetas,
                    inflables, ni cualquier otro accesorio similar.
                    <br></br>
                    Los menores no podrán ingresar sin el acompañamiento,
                    supervisión y responsabilidad de sus padres, tutor o mayor a
                    cargo. En ningún caso podrán permanecer solos en el área.
                    Está prohibida la reserva asientos.
                    <br></br>
                    No se permite mover, trasladar o realizar cualquier otro
                    cambio en el mobiliario del solárium.
                  </Text>

                  <Heading fontSize="xl" my={5} textAlign="center">
                    Rules SECTOR SPA
                  </Heading>

                  <Text>
                    El uso del sector spa es únicamente para los integrantes de
                    la unidad alquilada.
                    <br></br>
                    Se ingresara al spa únicamente con turno, asistiendo y
                    abandonándolo a horario, si quisiese permanecer debe sacar
                    otro turno.
                    <br></br>
                    Se prohíbe el ingreso a menores de 18 años.
                    <br></br>
                    Los clientes deberán ducharse antes de ingresar.
                    <br></br>
                    Las toallas provistas deberán utilizarse únicamente en el
                    sector spa.
                    <br></br>
                    Se prohíbe ingresar con alimentos o bebidas.
                  </Text>

                  <Heading fontSize="xl" my={5} textAlign="center">
                    Rules SECTOR CABINAS
                  </Heading>

                  <Text>
                    El uso de las cabinas es únicamente para los titulares de la
                    carpa o sombrilla que la alquilan.
                    <br></br>
                    Las llaves de acceso deberán quedar en el balneario.
                    <br></br>
                    Las toallas que provee el Balneario deberán quedar dentro de
                    cada cabina.
                    <br></br>
                    Fuera de la cabina no se puede tender ropa a secar,
                    únicamente dentro de la cabina.
                    <br></br>
                    El horario de uso de cabinas es el mismo que el del
                    vestuario.
                  </Text>

                  <Heading fontSize="xl" my={5} textAlign="center">
                    ORDENANZA No 25845
                  </Heading>

                  <Text>
                    Según la Ordenanza Municipal 25.845 se prohíbe fumar o
                    sostener tabaco encendido o similar en Unidades Turísticas
                    Fiscales administradas por el Estado Municipal, concesiones
                    de prestación de servicios turísticos otorgadas por otros
                    niveles jurisdiccionales y balnearios del sector privado.
                    <br></br>
                    El balneario preverá un sector especial debidamente
                    señalizado para que los clientes puedan fumar.
                    <br></br>
                    Todas las colillas de cigarrillo, cualquiera sea su tamaño o
                    características, como así́ también los restos de cigarrillo
                    electrónico, de tabaco o similares, cenizas de pipa y/o
                    cualquier otro elemento y/o desecho derivado o relacionado
                    con la actividad de fumar deberán ser depositadas en los
                    recipientes indicados por el balneario.
                  </Text>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <Box mt={4} bg="#36869F" p={3} color="white">
          * Las señas se toman con un 20% del valor | Para alquilar el mismo
          lugar de la temporada anterior reservá antes del 30/09 | La
          cancelación de la cuenta se toma con la tarifa vigente en la fecha del
          último pago | Los lockers se cancelan en el momento de la reserva.
        </Box>
      </Box>
    </Box>
  );
};

export default Rules;
