import { Box, Container, HStack } from '@chakra-ui/react';
import React, { useId, useState } from 'react';
import ChatBox from '../ChatListBox';
import ChatPrivateBox, { IChatPrivateBox } from '../ChatPrivateBox';

type TChatInfo = Omit<IChatPrivateBox, 'handleChatList'>;

export type THandleChatList = {
  chatInfo: TChatInfo;
  method: 'add' | 'delete';
};

function ChatContainer(): React.ReactElement {
  const reactId = useId();
  const [chatList, setChatList] = useState<TChatInfo[]>([]);

  function handleChatList({ chatInfo, method }: THandleChatList) {
    const auxChatList = JSON.parse(JSON.stringify(chatList)) as TChatInfo[];
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
      {chatList.map((chat, idx) => (
        <Box pr={2} key={`${reactId}-${chat.targetName}-${chat.targetId}`}>
          <ChatPrivateBox
            handleChatList={() => {
              handleChatList({
                chatInfo: {
                  targetId: chat.targetId,
                  targetName: chat.targetName,
                  targetImage: chat.targetImage,
                },
                method: 'delete',
              });
            }}
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
