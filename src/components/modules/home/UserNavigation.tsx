import React, { useState } from 'react';
import {
  AlertIcon,
  Avatar,
  Flex,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  List,
  ListItem,
  PseudoProps,
  ChakraStyleProps,
  ModalContentProps,
  Divider,
} from '@chakra-ui/core';
import { BellIcon, SearchIcon } from '@chakra-ui/icons';
import NavPrimaryButton from '../../atoms/NavPrimaryButton';
import { arrow } from '../../../utils/arrow';
import UserNavListItem from '../../atoms/Nav/UserNavListItem';

interface Props {}

const UserNavigation = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Flex
      w={['200px']}
      align="center"
      justify="space-between"
    >
      <SearchIcon />
      <NavPrimaryButton onClick={(event) => {}}>
        업로드
      </NavPrimaryButton>
      <Box>
        <Avatar
          h="1.7rem"
          w="1.7rem"
          pos="relative"
          onClick={() => setOpen((state) => !state)}
        />
        {isOpen && (
          <Box
            pos="absolute"
            transform="translate(3px,20px)"
            _before={arrow as PseudoProps<ChakraStyleProps>}
            color="HighlightText"
          >
            <List
              transform="translate(-100px,0)"
              p="6px"
              bg="grey.100"
              border="primary"
              borderRadius="5px"
              w="120%"
            >
              <UserNavListItem>
                프로필 페이지
              </UserNavListItem>
              <UserNavListItem>마이페이지</UserNavListItem>
              <UserNavListItem>계정 설정</UserNavListItem>
              <UserNavListItem>로그아웃</UserNavListItem>
              <Divider my="8px" />
              <UserNavListItem>블루닷 이란</UserNavListItem>
              <UserNavListItem>
                크리에이터 도움글
              </UserNavListItem>
              <UserNavListItem>
                서비스 이용약관
              </UserNavListItem>
              <UserNavListItem>
                개인정보 처리방침
              </UserNavListItem>
            </List>
          </Box>
        )}
      </Box>
      <BellIcon h="1.6rem" w="1.6rem" color="grey.100" />
    </Flex>
  );
};

export default UserNavigation;
