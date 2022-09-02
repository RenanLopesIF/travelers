import React, { BaseSyntheticEvent, useId, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Container from '../components/Container';
import Post, { TPost } from '../components/Post';
import withAuth from '../utils/withAuth';
import HeaderPost from '../components/HeaderPost';
import { colors } from '../utils/theme';

function Home() {
  const reactID = useId();

  const [inputValue, setInputValue] = useState<string>('');
  const [radioValue, setRadioValue] = useState<'opn' | 'anun'>('opn');
  const [posts, setPosts] = useState<Array<TPost>>([
    {
      userName: 'Daniel',
      userImage: 'https://bit.ly/prosper-baba',
      totalActions: 211,
      totalComments: 0,
      userType: 'Opinião',
      description: 'Francisco Badaró',
      liked: false,
      content:
        'Não gostei da inauguração do novo mercado não. Achei as comidas muito frias e teve muita politicagem.',
    },
    {
      userName: 'Vitin do Pineu',
      userImage: '../resources/partyplace/vitindopineu.jpg',
      totalActions: 1902,
      totalComments: 0,
      userType: 'Anúncio',
      description: 'Berilondres',
      liked: false,
      content:
        'Inauguração de um partido político com o principal objetivo de reestabelecer o ímperio no Brasil e Berilondre. Dia 31 de fevereiro de 2023.',
    },
    {
      userName: 'Abel silva',
      userImage: 'https://bit.ly/kent-c-dodds',
      totalActions: 489,
      totalComments: 0,
      userType: 'Anúncio',
      description: 'Araçuaí',
      liked: true,
      content:
        'Estrei promovendo um festa no clube no dia 13/09/2022 às 19:30. Vai ter um samba, sertanejo e axé ao vivo, e claro uma carne assada. O valor do ingresso será R$ 30,00',
    },
    {
      userName: 'Damares',
      userImage:
        'https://www.unicef.org/brazil/sites/unicef.org.brazil/files/styles/hero_desktop/public/br_nivia_pereira.jpg?itok=b6tEpt6l',
      totalActions: 61,
      totalComments: 0,
      userType: 'Anúncio',
      description: 'Itaobim',
      liked: false,
      content:
        'Protesto contra redução da verba para eventos culturais em frente a Prefeitura Municipal às 10:00 no dia 14/09/2022',
    },
    {
      userName: 'Carla',
      userImage:
        'https://blogs.canalrural.com.br/agroinspiradoras/wp-content/uploads/sites/45/2020/10/WhatsApp-Image-2020-10-30-at-15.17.58-1-1024x682.jpeg',
      totalActions: 153,
      totalComments: 0,
      userType: 'Opinião',
      description: 'Araçuaí',
      content: 'O show no clube ontem estava top demais. Só música boa.',
      liked: false,
    },
  ]);

  function changeInputValue(ev: BaseSyntheticEvent) {
    setInputValue(ev.currentTarget.value);
  }

  function changeRadioValue(value: 'opn' | 'anun') {
    setRadioValue(value);
  }

  function submitPost() {
    setPosts((prev) => [
      {
        userName: 'Renan Lopes',
        content: inputValue,
        liked: false,
        description: 'Francisco Badaró',
        totalActions: 0,
        totalComments: 0,
        userImage: '../../resources/profile.webp',
        userType: radioValue === 'anun' ? 'Anúncio' : 'Opinião',
      },
      ...prev,
    ]);
  }

  const lastPost = posts.filter((post) => post.liked).splice(-1, 1)[0];

  return (
    <Flex gap={5} px="20%" py={5}>
      <Box w="25%" h="min-content">
        <Text textAlign="center" mb={2} color="gray.500">
          Próximo evento
        </Text>
        <Container p={3}>
          <VStack alignItems="start" w="full">
            <HeaderPost
              description={lastPost.description}
              userImage={lastPost.userImage}
              userName={lastPost.userName}
              userType={lastPost.userType}
            />
            <Divider />
            <Text>{posts[1].content}</Text>
          </VStack>
        </Container>
      </Box>
      <VStack flex={1}>
        <Container w="full">
          <VStack w="full">
            <Textarea
              value={inputValue}
              onChange={changeInputValue}
              p={2}
              borderY="1px"
              borderColor="gray.200"
              w="full"
              _focus={{
                borderTop: `2px solid ${colors.primary[500]}`,
              }}
              borderRadius={0}
              variant="unstyled"
              placeholder="Escreva uma mensagem"
              resize="none"
              minH="90px"
            />
            <HStack w="full" justifyContent="space-between" p="1">
              <RadioGroup
                size="sm"
                defaultValue="opn"
                value={radioValue}
                onChange={changeRadioValue}
              >
                <HStack spacing="24px">
                  <Radio value="opn">Opinião</Radio>
                  <Radio value="anun">Anúncio</Radio>
                </HStack>
              </RadioGroup>
              <Button onClick={submitPost} colorScheme="primary" size="sm">
                Enviar
              </Button>
            </HStack>
          </VStack>
        </Container>
        {posts.map((data, idx) => (
          <Post
            liked={data.liked}
            key={`${data.content}-${reactID}-${idx}`}
            totalActions={data.totalActions}
            totalComments={data.totalComments}
            content={data.content}
            description={data.description}
            userImage={data.userImage}
            userName={data.userName}
            userType={data.userType}
          />
        ))}
      </VStack>
    </Flex>
  );
}

export default withAuth(Home);
