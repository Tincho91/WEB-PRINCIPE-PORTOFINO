import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "Leitura Display, serif",
    body: "Roboto, sans-serif",
    span: "Style Script, cursive",
  },
  colors: {
    primary: {
      400: '#489F82',
      450: "rgba(72, 159, 130, 0.5)",
    },
    gray: {
      100: '#858585',
    },
    blue: {
      100: '#36869F',
    },
  },
});

export default theme;