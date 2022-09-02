import React, { useId } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Box,
  theme,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import ChatHeader from '../ChatHeader';
import ChatMessage from '../ChatMessage';
import { THandleChatList } from '../ChatContainer';

interface ChatBoxProps {
  userImage: string;
  handleChatList: ({}: THandleChatList) => void;
}

function ChatBox({ userImage, handleChatList }: ChatBoxProps): React.ReactElement {
  const reactID = useId();
  const colors = theme.colors;

  const messages = [
    {
      userId: 1,
      userName: 'Ana',
      userImage: '../../../resources/profile.webp',
      time: 1660931389099,
      message: 'E você vai?',
    },
    {
      userId: 2,
      userName: 'Roberto',
      userImage: '',
      time: 1650931389099,
      message: 'Mais tarde um pouco',
    },
    {
      userId: 3,
      userName: 'Rapha',
      userImage: '',
      time: 1560931389099,
      message: 'Bom dia!',
    },
  ];

  return (
    <Accordion
      cursor="pointer"
      maxHeight="md"
      borderTopRadius={8}
      border={`1px solid ${colors.gray[300]}`}
      bgColor="white"
      allowToggle
      w="18em"
      overflowY="auto"
    >
      <AccordionItem border="none">
        <Box position={'sticky'} top={0} bg="white" zIndex={2}>
          <ChatHeader image={userImage} label="Conversas" />
        </Box>

        <AccordionPanel pb="4" pr="0">
          <List
            overflowY="auto"
            h="22em"
            sx={{
              '&::-webkit-scrollbar': {
                w: '1',
              },
              '&::-webkit-scrollbar-track': {
                w: '1',
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '10',
                bg: `gray.400`,
              },
            }}
          >
            {messages.length &&
              messages.map((message, idx) => (
                <ListItem key={`${message.userName}${reactID}-${idx}`}>
                  <ChatMessage
                    onClick={() => {
                      handleChatList({
                        chatInfo: {
                          targetId: message.userId,
                          targetImage: message.userImage,
                          targetName: message.userName,
                        },
                        method: 'add',
                      });
                    }}
                    datetime={message.time}
                    userImage={message.userImage}
                    userName={message.userName}
                    message={message.message}
                  />
                </ListItem>
              ))}

            {!messages.length && (
              <Box width="full" p={4}>
                <Text textAlign="center" color="gray.500">
                  Nenhum conversa para mostrar
                </Text>
              </Box>
            )}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ChatBox;
