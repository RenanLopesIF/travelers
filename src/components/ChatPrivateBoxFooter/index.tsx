import React, { BaseSyntheticEvent, useState } from 'react';
import { Button, HStack, Textarea, VStack } from '@chakra-ui/react';

import { colors } from '../../utils/theme';

function ChatPrivateBoxFooter(): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>('');

  function changeInputValue(ev: BaseSyntheticEvent) {
    setInputValue(ev.currentTarget.value);
  }

  return (
    <VStack spacing={0}>
      <Textarea
        value={inputValue}
        onChange={changeInputValue}
        p={2}
        borderY="1px"
        borderColor="gray.200"
        w="full"
        _focus={{
          borderTop: `2px solid ${colors.primary[500]}`,
        }}
        borderRadius={0}
        variant="unstyled"
        placeholder="Escreva uma mensagem"
        resize="none"
        minH="60px"
        maxH="80px"
      />
      <HStack w="full" h="40px" p="2" justifyContent="right">
        <Button colorScheme="primary" h="full">
          Enviar
        </Button>
      </HStack>
    </VStack>
  );
}

export default ChatPrivateBoxFooter;
