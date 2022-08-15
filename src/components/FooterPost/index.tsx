import React, { ReactElement } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ChatIcon, StarIcon } from '@chakra-ui/icons';

export function FooterPost(): ReactElement {
  return (
    <Box w="full">
      <Flex justifyContent="space-between" mt={1} fontSize={12} width="100%">
        <Flex alignItems={'center'}>
          <StarIcon />
          <Text>269</Text>
        </Flex>
        <Flex>
          <Text>12 comentários</Text>
        </Flex>
      </Flex>
      <Flex gap={3}>
        <Button height={8} leftIcon={<StarIcon />}>
          Curtir
        </Button>
        <Button height={8} leftIcon={<ChatIcon />}>
          Comentários
        </Button>
      </Flex>
    </Box>
  );
}
