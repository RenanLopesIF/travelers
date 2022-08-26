import React from 'react';
import { Avatar, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import moment from 'moment';
import { THandleChatList } from '../ChatContainer';

interface ChatMessageProps {
  userImage: string;
  userName: string;
  message: string;
  datetime: string | number;
  onClick: () => void;
}

function ChatMessage({
  userImage,
  userName,
  message,
  datetime,
  onClick,
}: ChatMessageProps): React.ReactElement {
  const dateFormat = 'MMMM Do YYYY, h:mm:ss a';
  const curDate = moment(datetime).format(dateFormat);
  const date = moment(curDate, dateFormat).fromNow();

  return (
    <HStack
      _hover={{ opacity: 0.9 }}
      mb={3}
      width="full"
      overflowX="hidden"
      onClick={() => {
        onClick();
      }}
    >
      <Avatar size="sm" src={userImage} />
      <VStack alignItems="flex-start" ml="30" flex={1} spacing={0}>
        <HStack w="full" pr={5} alignItems="center" spacing={1}>
          <Text fontSize={14} fontWeight="500" noOfLines={1} maxW="50%">
            {userName}
          </Text>
          <Text fontSize={12}>•</Text>
          <Text color="gray.300" fontSize={9}>
            {date}
          </Text>
        </HStack>

        <Text color="gray.600" fontSize={12} noOfLines={2} mb={3}>
          {message}
        </Text>
        <Divider h="1px" opacity={0.3} style={{ marginTop: '3px' }} />
      </VStack>
    </HStack>
  );
}

export default ChatMessage;
