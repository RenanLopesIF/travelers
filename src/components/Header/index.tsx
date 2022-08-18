import { ReactElement } from 'react';
import {
  Flex,
  Image,
  theme,
  HStack,
  InputLeftElement,
  InputGroup,
  Input,
  Avatar,
  Divider,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon, ChatIcon } from '@chakra-ui/icons';

function Header(): ReactElement {
  const colors = theme.colors;
  return (
    <Flex
      paddingX="10%"
      w="100%"
      bgColor="white"
      h="50px"
      borderBottom={`1px solid ${colors.blackAlpha[200]}`}
      flexDir="row"
      justifyContent="space-between"
    >
      <HStack>
        <Image width="40px" height="40px" src="../../../resources/logo.png" />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color={colors.black[300]} />}
          />
          <Input type="tel" placeholder="Pesquisar" />
        </InputGroup>
      </HStack>
      <HStack spacing="10px">
        <ChatIcon width="25px" height="25px" color={colors.black[300]} />
        <BellIcon width="25px" height="25px" color={colors.black[300]} />
        <Divider px="3px" orientation="vertical" />
        <Avatar size="sm" name="Profile" src="../../../resources/profile.webp" />
      </HStack>
    </Flex>
  );
}

export default Header;
