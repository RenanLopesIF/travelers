import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Container from '../components/Container';

function Login(): React.ReactElement {
  const toast = useToast();
  const inputUserRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function onSubmit() {
    setIsSubmiting(true);
    toast.closeAll();
    const username = inputUserRef.current?.value;
    const password = inputPasswordRef.current?.value;
    if (username === 'renanlopes' && password === 'renan123') {
      document.location = '/home';
    } else {
      toast({
        title: 'Usuário ou senha incorreto.',
        variant: 'top-accent',
        position: 'top',
        isClosable: true,
        status: 'warning',
        duration: 1750,
      });
    }

    setIsSubmiting(false);
  }

  return (
    <Center width="full" p="20">
      <Container w="md" p="10" justifyContent="center">
        <VStack alignItems="center">
          <Box>
            <Image src="../../resources/logo.png" />
          </Box>
          <VStack spacing={4} flex={1} w="full" py={4}>
            <Input ref={inputUserRef} colorScheme="primary" placeholder="Usuário" />
            <InputGroup size="md">
              <Input
                type={showPassword ? 'text' : 'password'}
                ref={inputPasswordRef}
                colorScheme="primary"
                placeholder="Senha"
              />
              <InputRightElement width="3.5em">
                <IconButton
                  variant="unstyled"
                  onClick={handleShowPassword}
                  aria-label={showPassword ? 'Mostrar senha' : 'Esconder senha'}
                  icon={
                    showPassword ? (
                      <ViewIcon color="gray.700" />
                    ) : (
                      <ViewOffIcon color="gray.700" />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
          </VStack>
          <Button
            colorScheme="primary"
            w="full"
            onClick={onSubmit}
            disabled={isSubmiting}
            _disabled={{ opacity: 0.6, cursor: 'not-allowed' }}
          >
            LOGIN
            {isSubmiting && <Spinner ml={3} />}
          </Button>
          <Text fontSize="sm" fontWeight={500}>
            NÃO TEM CONTA?{' '}
            {
              <Link
                color="primary.600"
                href={!isSubmiting ? '/#' : undefined}
                opacity={!isSubmiting ? 1 : 0.6}
                cursor={!isSubmiting ? 'pointer' : 'not-allowed'}
              >
                CRIE UMA
              </Link>
            }
          </Text>
        </VStack>
      </Container>
    </Center>
  );
}

export default Login;
