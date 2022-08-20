import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export interface IChatPrivateMessageBoxProps {
  type: 'sent' | 'received';
  message: string;
}

function ChatPrivateMessageBox({
  message,
  type,
}: IChatPrivateMessageBoxProps): React.ReactElement {
  const bgColor = type === 'received' ? '#e5e5e5' : 'primary.200';

  return (
    <Flex w="full" flexDir={type === 'received' ? 'row' : 'row-reverse'}>
      <Box maxW="60%" bgColor={bgColor} borderRadius="sm" p="2">
        <Text fontSize={12}>{message}</Text>
      </Box>
    </Flex>
  );
}

export default ChatPrivateMessageBox;
