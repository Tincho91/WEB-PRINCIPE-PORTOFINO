'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import theme from '@/styles/theme';
import Index from '@/pages';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="description" content="Playa Grande en Mar del Plata ofrece una variedad de servicios que incluyen alquiler de carpas y sombrillas, accesibilidad para todos, medidas de prevención, un SPA completo, piscinas familiares, actividades recreativas, sanitarios amplios, locales comerciales, y alquiler de cabinas privadas. Experimenta la playa como nunca antes." />
        <meta name="keywords" content="Playa Grande, Mar del Plata, Alquiler de Carpas, Sombrillas, Accesibilidad, Prevención, SPA, Piscinas, Recreación, Sanitarios, Comercios, Cabinas" />
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
        <link href="https://fonts.googleapis.com/css2?family=Leitura+Display:wght@400;700&family=Style+Script&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        <title>Príncipe Portofino</title>
      </Head>
      <Toaster />
      <Index />
    </ChakraProvider>
  );
}

export default MyApp;
