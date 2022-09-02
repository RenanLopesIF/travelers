import React, { ReactElement, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ChatIcon, StarIcon } from '@chakra-ui/icons';
import { TPost } from '../Post';
import { IHeaderPost } from '../HeaderPost';

export interface FooterPostProps {
  postType: 'Opinião' | 'Anúncio';
  totalActions: number;
  totalComments: number;
  liked: boolean;
}

function FooterPost({
  postType,
  totalActions = 0,
  totalComments = 0,
  liked,
}: FooterPostProps): ReactElement {
  const [actionsValue, setActionValue] = useState<number>(totalActions);
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  function handleIsLiked() {
    setIsLiked((prev) => !prev);
    if (isLiked) {
      setActionValue((prev) => prev - 1);
    } else {
      setActionValue((prev) => prev + 1);
    }
  }
  return (
    <Box w="full">
      <Flex justifyContent="space-between" mt={1} fontSize={12} width="100%">
        <Flex alignItems={'center'}>
          <StarIcon color={isLiked ? 'primary.500' : 'black'} />
          <Text ml="1">{actionsValue}</Text>
        </Flex>
        <Flex>
          <Text>{totalComments} comentários</Text>
        </Flex>
      </Flex>
      <Flex gap={3}>
        <Button
          onClick={handleIsLiked}
          colorScheme="primary"
          height={8}
          leftIcon={<StarIcon />}
        >
          {postType === 'Opinião' ? 'Concordo' : 'Interessei'}
        </Button>
        <Button colorScheme="gray" height={8} leftIcon={<ChatIcon />}>
          Comentários
        </Button>
      </Flex>
    </Box>
  );
}

export default FooterPost;
