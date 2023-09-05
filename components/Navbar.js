import {
  Box,
  Flex,
  Link,
  Image,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from "@chakra-ui/react";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";


const Navbar = () => {
  const hoverColor = useColorModeValue("#295a73", "#4a8ca7");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Mobile device
      window.location.href = 'tel:2234515652';
    } else {
      // Desktop or tablet, open modal
      onOpen();
    }
  };

  return (
    <Box as="nav" align="center" bg="white" py={{ base: "4", sm: "2" }}>
      <Flex
        flexDirection={{ base: "column", md: "row" }} // vertical for base to md, horizontal for lg and up
        justifyContent="space-between"
        alignItems="center"
        w={{ base: "90%", md: "95%" }}
        maxW="1200px"
        mx="auto"
      >
        <Image
          src="/images/logonav.png"
          alt="Brand Logo"
          w="auto"
          h={{ base: "45px", md: "60px" }}
          mb={{ base: 4, md: 0 }} // margin bottom for smaller screens
          _hover={{
            transform: "scale(1.01)",
            transition: "transform 0.3s",
          }}
        />
        <Flex
          w={{ base: "100%", md: "auto" }}
          justifyContent={{ base: "space-between", md: "flex-end" }}
        >
          <Box mr={{ base: 0, md: 5 }}>
            <Link
              onClick={handleClick}
              aria-label="Llámanos"
              display="flex"
              alignItems="center"
            >
              <AiOutlinePhone style={{ fontSize: "24px", transform: "scaleX(-1)" }} />
              <Box display={{ base: "none", md: "inline" }} ml={2}>
                223-451-5652
              </Box>
            </Link>

            {/* The Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Anotá este número</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Llamanos cuando gustes: 223 451-5652</Text>
                  <Text>Nuestro horario de atención es de 11 a 19</Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

          <Box mr={5}>
            <Link
              href="https://api.whatsapp.com/send?phone=2236703745"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mándanos un Whatsapp"
              _hover={{ color: hoverColor }}
              display="flex"
              alignItems="center"
            >
              <AiOutlineWhatsApp style={{ fontSize: "24px" }} />
              <Box display={{ base: "none", md: "inline" }} ml={2}>
                223-670-3735
              </Box>
            </Link>
          </Box>

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
              aria-label="Nuestra Ubicación"
              _hover={{ color: hoverColor }}
            >
              <MdOutlinePlace style={{ fontSize: "24px" }} />
            </Link>
          </Box>

          <Box>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
