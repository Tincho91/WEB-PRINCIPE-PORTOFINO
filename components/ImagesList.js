import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

import ScaleFade from "@/components/animations/scaleFade";

function ImagesList() {
  const totalImages = 11;
  const imagePaths = Array.from(
    { length: totalImages },
    (_, index) => `/images/serv${index + 1}.png`
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });
  const imageWidth = useBreakpointValue({
    base: "calc(50% - 8px)",
    md: "calc(33.33% - 8px)",
  });

  const onImageClick = (index) => {
    if (breakpoint === "base" || breakpoint === "md") {
      setSelectedImage(imagePaths[index]);
      setIsOpen(true);
    }
  };

  return (
    <Box w="100%" py={5}>
      <Box w={{ base: "90%", sm: "95%" }} maxW="1200px" mx="auto">
        <Flex wrap="wrap" justify="center">
          {imagePaths.map((imagePath, index) => (
            <Box
              key={index}
              width={imageWidth}
              p="10px"
              onClick={() => onImageClick(index)}
            >
              <ScaleFade id={`animatedElement${index}`}>
                <Image
                  src={imagePath}
                  alt={`Service Image ${index + 1}`}
                  borderRadius="8px"
                  width="100%"
                  transition="transform 0.3s"
                />
              </ScaleFade>
            </Box>
          ))}
        </Flex>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCentered={true}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent
          position="relative"
          borderRadius="20px"
          maxW={{ base: "90%", sm: "80%", md: "60%" }}
        >
          <ModalCloseButton
            position="absolute"
            right="8px"
            top="-40px"
            bgColor="white"
            borderRadius="8px"
            _hover={{ bg: "gray.200" }}
          />
          <Image src={selectedImage} alt="Enlarged Service Image" maxW="100%" />
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ImagesList;
