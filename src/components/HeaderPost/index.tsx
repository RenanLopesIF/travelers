import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

export interface IHeaderPost {
  userName: string;
  userImage: string;
  userType: 'Opinião' | 'Anúncio';
  description: string;
}

function HeaderPost({
  userName = 'Usuário',
  userImage = 'https://bit.ly/sage-adebayo',
  userType,
  description,
}: IHeaderPost): ReactElement {
  return (
    <Flex>
      <Avatar src={userImage} />
      <Box ml="3">
        <Text fontWeight="bold">
          {userName}
          <Badge ml="1" colorScheme={userType === 'Anúncio' ? 'yellow' : 'primary'}>
            {userType}
          </Badge>
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </Flex>
  );
}

export default HeaderPost;
