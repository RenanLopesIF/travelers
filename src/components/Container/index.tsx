import { Flex, FlexProps, theme } from '@chakra-ui/react';
import React, { PropsWithChildren, ReactElement } from 'react';

function Container({ children, ...props }: PropsWithChildren<FlexProps>): ReactElement {
  const colors = theme.colors;
  return (
    <Flex
      borderRadius={8}
      border={`2px solid ${colors.blackAlpha[200]}`}
      bgColor="white"
      {...props}
    >
      {children}
    </Flex>
  );
}

export default Container;
