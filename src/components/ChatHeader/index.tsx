import React from 'react';
import {
  AccordionButton,
  AccordionIcon,
  Avatar,
  AvatarBadge,
  HStack,
  Text,
  theme,
} from '@chakra-ui/react';

interface IChatHeaderProps {
  image: string;
  label: string;
}

function ChatHeader({ image, label }: IChatHeaderProps): React.ReactElement {
  const colors = theme.colors;

  return (
    <span>
      <AccordionButton
        borderBottom={`1px solid ${colors.gray[200]}`}
        borderBottomWidth="2px"
      >
        <HStack spacing={3} flex="1" textAlign="left">
          <Avatar size="sm" src={image}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Text>{label}</Text>
        </HStack>
        <AccordionIcon />
      </AccordionButton>
    </span>
  );
}

export default ChatHeader;