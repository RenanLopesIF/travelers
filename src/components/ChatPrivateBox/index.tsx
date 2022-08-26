import React, { useId } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  ListItem,
  theme,
} from '@chakra-ui/react';
import ChatHeader from '../ChatHeader';
import ChatPrivateMessageBox, {
  IChatPrivateMessageBoxProps,
} from '../ChatPrivateMessageBox';
import ChatPrivateBoxFooter from '../ChatPrivateBoxFooter';

export interface IChatPrivateBox {
  targetImage: string;
  targetName: string;
  targetId: number;
  handleChatList: () => void;
}

function ChatPrivateBox({
  targetImage,
  targetName,
  targetId,
  handleChatList,
}: IChatPrivateBox): React.ReactElement {
  const colors = theme.colors;
  const reactID = useId();

  const messages = [
    {
      message: 'Bom dia',
      type: 'received',
    },
    {
      message: 'Bom dia.',
      type: 'sent',
    },
    {
      message: 'Como vai?',
      type: 'sent',
    },
    {
      message: 'Bem, e você?',
      type: 'received',
    },
    {
      message: 'Bem, e você?',
      type: 'received',
    },
    {
      message: 'Bem, e você?',
      type: 'received',
    },
    {
      message: 'Bem, e você?',
      type: 'received',
    },
  ] as Array<IChatPrivateMessageBoxProps>;

  return (
    <Accordion
      maxHeight="sm"
      borderTopRadius={8}
      border={`1px solid ${colors.gray[300]}`}
      bgColor="white"
      allowToggle
      w="18em"
      overflowY="auto"
    >
      <AccordionItem border="none">
        <Box position={'sticky'} top={0} bg="white" zIndex={2}>
          <ChatHeader
            image={targetImage}
            label={targetName}
            hasCloseButton
            onPressCloseButton={handleChatList}
          />
        </Box>

        <AccordionPanel p="0">
          <List
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
            h="14em"
            spacing={1}
            overflowY="auto"
            px="4"
            py="0"
          >
            {messages.map((msg, idx) => (
              <ListItem key={`${reactID}-${idx}`}>
                <ChatPrivateMessageBox message={msg.message} type={msg.type} />
              </ListItem>
            ))}
          </List>
          <ChatPrivateBoxFooter />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ChatPrivateBox;
