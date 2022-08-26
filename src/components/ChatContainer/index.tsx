import { Box, Container, HStack } from '@chakra-ui/react';
import React, { useId, useState } from 'react';
import ChatBox from '../ChatBox';
import ChatPrivateBox, { IChatPrivateBox } from '../ChatPrivateBox';

export type THandleChatList = {
  chatInfo: IChatPrivateBox;
  method: 'add' | 'delete';
};

function ChatContainer(): React.ReactElement {
  const reactId = useId();
  const [chatList, setChatList] = useState<IChatPrivateBox[]>([]);

  function handleChatList({ chatInfo, method }: THandleChatList) {
    const auxChatList = JSON.parse(JSON.stringify(chatList)) as IChatPrivateBox[];
    const curItemIdx = auxChatList.findIndex(
      (item) => item.targetId === chatInfo.targetId,
    );
    if (curItemIdx === -1 && method === 'add') {
      auxChatList.push(chatInfo);
    }

    if (curItemIdx !== -1 && method === 'delete') {
      auxChatList.splice(curItemIdx, 1);
    }

    setChatList(auxChatList);
  }

  // const chatList = [
  //   {
  //     targetName: 'Roberto',
  //     targetImage: '',
  //   },
  // ];

  return (
    <HStack
      w="full"
      position="fixed"
      bottom={0}
      alignItems="flex-end"
      flexDir="row-reverse"
    >
      <ChatBox
        userImage="../../../resources/profile.webp"
        handleChatList={handleChatList}
      />
      {chatList.map((chat) => (
        <Box pr={2} key={`${reactId}-${chat.targetName}`}>
          <ChatPrivateBox
            handleChatList={() => {}}
            targetId={chat.targetId}
            targetName={chat.targetName}
            targetImage={chat.targetImage}
          />
        </Box>
      ))}
    </HStack>
  );
}

export default ChatContainer;
