import { Box, Button, Center, Image, Input, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Container from '../components/Container';

function Login(): React.ReactElement {
  function onSubmit() {
    document.location = '/home';
  }

  return (
    <Center width="full" p="20">
      <Container w="md" p="10" justifyContent="center">
        <VStack alignItems="center">
          <Box>
            <Image src="../../resources/logo.png" />
          </Box>
          <VStack spacing={4} flex={1} w="full" py={4}>
            <Input colorScheme="primary" placeholder="Usuário" />
            <Input colorScheme="primary" placeholder="Senha" />
          </VStack>
          <Button colorScheme="primary" w="full" onClick={onSubmit}>
            LOG IN
          </Button>
          <Text fontSize="sm" fontWeight={500}>
            NÃO TEM CONTA? {<Link color="primary.600">CRIE UMA</Link>}
          </Text>
        </VStack>
      </Container>
    </Center>
  );
}

export default Login;
