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
  Menu,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
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
      borderBottom={`1px solid ${colors.gray[200]}`}
      flexDir="row"
      justifyContent="space-between"
    >
      <HStack>
        <Image w="40px" h="40px" src="../../../resources/partyplace/logo-icon-azul.png" />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="black.700" />}
          />
          <Input type="tel" placeholder="Pesquisar" />
        </InputGroup>
      </HStack>
      <HStack spacing="10px">
        <Menu>
          <MenuButton
            _active={{ backgroundColor: 'primary.300' }}
            bgColor="transparent"
            as={Button}
          >
            <BellIcon width="25px" height="25px" color="black.700" />
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px" borderBottom="1px" borderColor="gray.100">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Ana Ribeiro concorda com sua opinião</span>
            </MenuItem>
            <MenuItem minH="48px" borderBottom="1px" borderColor="gray.50">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="../../resources/partyplace/vitindopineu.jpg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Vitin do Pineu convidou você para um evento</span>
            </MenuItem>
            <MenuItem minH="48px" borderBottom="1px" borderColor="gray.100">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1RrTgLueSZ0PEUk5WomywEc76OOZtJd-Rw&usqp=CAU"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>André tem interesse em seu evento</span>
            </MenuItem>
          </MenuList>
        </Menu>

        <Divider px="3px" orientation="vertical" />
        <Avatar size="sm" name="Profile" src="../../../resources/profile.webp" />
      </HStack>
    </Flex>
  );
}

export default Header;
