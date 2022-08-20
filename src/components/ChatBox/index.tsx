import React, { useId } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Box,
  theme,
  List,
  ListItem,
} from '@chakra-ui/react';
import ChatHeader from '../ChatHeader';
import ChatMessage from '../ChatMessage';

interface ChatBoxProps {
  userImage: string;
}

function ChatBox({ userImage }: ChatBoxProps): React.ReactElement {
  const reactID = useId();
  const colors = theme.colors;

  const messages = [
    {
      userName: 'AnaAnaaaaaaaaaaaaaaaaaaaaaaaa',
      userImage: '../../../resources/profile.webp',
      time: 1660931389099,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum quam quia consectetur sint ratione ab maxime ipsam fugiat mollitia? Nobis voluptates explicabo odit, sapiente omnis voluptas doloremque veniam magnam.',
    },
    {
      userName: 'Roberto',
      userImage: '',
      time: 1650931389099,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste excepturi, magni pariatur officiis dolorem deleniti soluta omnis accusamus molestias inventore voluptatum sequi impedit, aliquid molestiae magnam! Quibusdam, quas tempora.',
    },
    {
      userName: 'Rapha',
      userImage: '',
      time: 1560931389099,
      message: 'Bom dia!',
    },
  ];

  return (
    <Accordion
      maxHeight="md"
      borderTopRadius={8}
      border={`1px solid ${colors.gray[300]}`}
      bgColor="white"
      allowToggle
      w="18em"
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
      overflowY="auto"
    >
      <AccordionItem border="none">
        <Box position={'sticky'} top={0} bg="white" zIndex={2}>
          <ChatHeader image={userImage} label="Conversas" />
        </Box>

        <AccordionPanel pb="4" pr="4">
          <List overflowY="auto">
            {messages.map((message) => (
              <ListItem key={`${message.userName}${reactID}`}>
                <ChatMessage
                  datetime={message.time}
                  userImage={message.userImage}
                  userName={message.userName}
                  message={message.message}
                />
              </ListItem>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ChatBox;
