import React, { useId } from 'react';
import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import Container from '../components/Container';
import Post, { TPost } from '../components/Post';
import withAuth from '../utils/withAuth';
import HeaderPost from '../components/HeaderPost';

function Home() {
  const reactID = useId();

  const posts = [
    {
      userName: 'Daniel',
      userImage: 'https://bit.ly/prosper-baba',
      totalActions: 211,
      totalComments: 0,
      userType: 'Opinião',
      description: 'Francisco Badaró',
      liked: false,
      occurrence: Date.now(),
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
      occurrence: new Date('2023-02-31').getTime(),
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
      occurrence: new Date('2022-09-13').getTime(),
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
      occurrence: new Date('2022-09-14').getTime(),
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
      occurrence: Date.now(),
      content: 'O show no clube ontem estava top demais. Só música boa.',
      liked: false,
    },
  ] as unknown as Array<TPost>;
  return (
    <Flex gap={5} px="20%" py={5}>
      <Box w="25%" h="min-content">
        <Text textAlign="center" mb={2} color="gray.500">
          Próximo evento
        </Text>
        <Container p={3}>
          <VStack alignItems="start" w="full">
            <HeaderPost
              description={posts[2].description}
              userImage={posts[2].userImage}
              userName={posts[2].userName}
              userType={posts[2].userType}
            />
            <Divider />
            <Text>{posts[1].content}</Text>
          </VStack>
        </Container>
      </Box>
      <VStack flex={1}>
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
