import { Box, Image, AspectRatio } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box
      height="600px"
      position="relative"
      bg="#D1E5EB"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Background image */}
      <Image
        src="/images/capa2.png"
        alt="Background Image"
        position="absolute"
        width="full"
        height="full"
        objectFit="cover"
        zIndex="0"
      />
      {/* Map iframe */}
      <Box
        w={{ base: "90%", sm: "95%" }}
        maxW="1200px"
        zIndex="1"
        position="relative"
        mx="auto"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.8238505561267!2d-57.53374142335029!3d-38.02788584630718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc075fa79ac1%3A0xd5aef8c65d97e99a!2sBalneario%20Pr%C3%ADncipe%20y%20Portofino%2C%20Playa%20Grande!5e0!3m2!1ses-419!2sar!4v1692247150789!5m2!1ses-419!2sar"
          height="500"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default Map;
