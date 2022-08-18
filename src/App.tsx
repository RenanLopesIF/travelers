import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import Routes from './Routes';
import { Header } from './components/Header';
import { ChatBox } from './components/ChatBox';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <ChatBox userImage="../../../resources/profile.webp" />
      <Routes />;
    </ChakraProvider>
  );
}
