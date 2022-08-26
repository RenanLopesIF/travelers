import React from 'react';
import {
  AccordionButton,
  AccordionIcon,
  Avatar,
  AvatarBadge,
  CloseButton,
  HStack,
  Text,
  theme,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface IChatHeaderProps {
  image: string;
  label: string;
  hasCloseButton?: boolean;
  onPressCloseButton?: () => void;
}

function ChatHeader({
  image,
  label,
  hasCloseButton,
  onPressCloseButton,
}: IChatHeaderProps): React.ReactElement {
  const colors = theme.colors;

  return (
    <AccordionButton
      borderBottom={`1px solid ${colors.gray[200]}`}
      borderBottomWidth="2px"
      maxW="100%"
      overflow="hidden"
    >
      <HStack w="80%" spacing={3} flex="1" textAlign="left">
        <Avatar size="sm" src={image}>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Text noOfLines={1}>{label}</Text>
      </HStack>
      {hasCloseButton ? (
        <CloseIcon
          boxSize={2.5}
          onClick={onPressCloseButton}
          _hover={{ color: 'primary.600' }}
        />
      ) : (
        <AccordionIcon _hover={{ color: 'primary.600' }} />
      )}
    </AccordionButton>
  );
}

export default ChatHeader;
