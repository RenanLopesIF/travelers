import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';

import Routes from './Routes';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />;
    </ChakraProvider>
  );
}
