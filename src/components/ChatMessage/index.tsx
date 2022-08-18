import { Avatar, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface ChatMessageProps {
  userImage: string;
  userName: string;
  message: string;
}

export function ChatMessage({
  userImage,
  userName,
  message,
}: ChatMessageProps): React.ReactElement {
  return (
    <HStack mb={3}>
      <Avatar size="sm" src={userImage} />
      <VStack alignItems="flex-start" ml="3" flex={1} spacing={0}>
        <Text fontSize={14} fontWeight="500" noOfLines={1}>
          {userName}
        </Text>

        <Text fontSize={12} noOfLines={2} mb={3}>
          {message}
        </Text>
        <Divider h="1px" opacity={0.3} style={{ marginTop: '3px' }} />
      </VStack>
    </HStack>
  );
}
