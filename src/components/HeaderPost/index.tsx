import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { THeaderPost } from '../../types';

function HeaderPost({
  userName = 'Usuário',
  userImage = 'https://bit.ly/sage-adebayo',
  userType,
  description,
}: THeaderPost): ReactElement {
  return (
    <Flex>
      <Avatar src={userImage} />
      <Box ml="3">
        <Text fontWeight="bold">
          {userName}
          <Badge ml="1" colorScheme={userType === 'Motorista' ? 'yellow' : 'cyan'}>
            {userType}
          </Badge>
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </Flex>
  );
}

export default HeaderPost;
