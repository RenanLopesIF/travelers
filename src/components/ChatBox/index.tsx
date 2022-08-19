import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  AvatarBadge,
  Box,
  theme,
  Text,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import React, { useId } from 'react';
import ChatMessage from '../ChatMessage';

interface ChatBoxProps {
  userImage: string;
}

function ChatBox({ userImage }: ChatBoxProps): React.ReactElement {
  const reactID = useId();
  const colors = theme.colors;

  const messages = [
    {
      userName: 'Ana',
      userImage: '../../../resources/profile.webp',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum quam quia consectetur sint ratione ab maxime ipsam fugiat mollitia? Nobis voluptates explicabo odit, sapiente omnis voluptas doloremque veniam magnam.',
    },
    {
      userName: 'Roberto',
      userImage: '',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste excepturi, magni pariatur officiis dolorem deleniti soluta omnis accusamus molestias inventore voluptatum sequi impedit, aliquid molestiae magnam! Quibusdam, quas tempora.',
    },
    {
      userName: 'Rapha',
      userImage: '',
      message: 'Bom dia!',
    },
  ];

  return (
    <Accordion
      maxHeight="80%"
      position="fixed"
      bottom={0}
      right={0}
      zIndex={99}
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
      style={{ scrollbarColor: '#f0c' }}
      overflowY="auto"
    >
      <AccordionItem border="none">
        <Box position={'sticky'} top={0} bg="white" zIndex={2}>
          <h2>
            <AccordionButton
              borderBottom={`1px solid ${colors.gray[200]}`}
              borderBottomWidth="2px"
            >
              <HStack spacing={3} flex="1" textAlign="left">
                <Avatar size="sm" src={userImage}>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Text>Conversas</Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </Box>

        <AccordionPanel pb={4} pr="0">
          <List overflowY="auto">
            {messages.map((message) => (
              <ListItem key={`${message.userName}${reactID}`}>
                <ChatMessage
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
