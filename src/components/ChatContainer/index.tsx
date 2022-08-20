import { Box, Container, HStack } from '@chakra-ui/react';
import React, { useId } from 'react';
import ChatBox from '../ChatBox';
import ChatPrivateBox from '../ChatPrivateBox';

function ChatContainer(): React.ReactElement {
  const reactId = useId();
  const chatList = [
    {
      targetName: 'Roberto',
      targetImage: '',
    },
  ];

  return (
    <HStack
      w="full"
      position="fixed"
      bottom={0}
      alignItems="flex-end"
      flexDir="row-reverse"
    >
      <ChatBox userImage="../../../resources/profile.webp" />
      {chatList.map((chat) => (
        <Box pr={2} key={`${reactId}-${chat.targetName}`}>
          <ChatPrivateBox targetName={chat.targetName} targetImage={chat.targetImage} />
        </Box>
      ))}
    </HStack>
  );
}

export default ChatContainer;
