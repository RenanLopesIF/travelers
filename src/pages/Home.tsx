import React, { useId } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { TPost } from '../types';
import { Container } from '../components/Container';
import { Post } from '../components/Post';
import withAuth from '../utils/withAuth';

function Home() {
  const reactID = useId();

  const posts = [
    {
      userName: 'Renan',
      userImage: 'https://bit.ly/sage-adebayo',
      userType: 'Passageiro',
      description: 'Francisco Badaró',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi ea, reiciendis vero temporibus debitis provident, ipsum cum reprehenderit recusandae perferendis quae architecto at? Eligendi illo error obcaecati iusto veniam.',
    },
    {
      userName: 'Rai',
      userImage: 'https://bit.ly/sage-adebayo',
      userType: 'Motorista',
      description: 'Araçuaí',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt a ab omnis sequi, corrupti vero cumque aspernatur quam vel impedit quasi vitae sapiente repudiandae maiores dolor ratione in dolorum!',
    },
    {
      userName: 'Rai',
      userImage: 'https://bit.ly/sage-adebayo',
      userType: 'Motorista',
      description: 'Araçuaí',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt a ab omnis sequi, corrupti vero cumque aspernatur quam vel impedit quasi vitae sapiente repudiandae maiores dolor ratione in dolorum!',
    },
    {
      userName: 'Rai',
      userImage: 'https://bit.ly/sage-adebayo',
      userType: 'Passageiro',
      description: 'Araçuaí',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt a ab omnis sequi, corrupti vero cumque aspernatur quam vel impedit quasi vitae sapiente repudiandae maiores dolor ratione in dolorum!',
    },
  ] as Array<TPost>;
  return (
    <Flex gap={5} px="20%" py={5}>
      <Container w="25%" h="100"></Container>
      <VStack flex={1}>
        {posts.map((data, idx) => (
          <Post
            key={`${data.content}-${reactID}-${idx}`}
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
