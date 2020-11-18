import {
  AspectRatio,
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/core';
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

interface IPostItem {
  key?: number;
}

const PostItem: React.FC<IPostItem> = (props) => {
  const {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  } = useDisclosure();

  return (
    <Box
      key={props.key}
      minH="150px"
      w="100%"
      fontSize=".8rem"
      onClick={() => onToggle()}
    >
      <Image src="https://i.ytimg.com/vi/mxJGDa7ThbE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD2kF6j-nY8rIHfCDZqEIcUqGnuhQ" />
      <Flex>
        <Avatar size="sm" my="5px" mr="5px" />
        <Flex flexShrink={1} wrap="wrap">
          <Text d="block">
            Lorem iorum nihil,s? Animi doloribus mollitia
            nam ab
          </Text>
          <Flex w="100%" justify="space-between">
            <Text>침착맨</Text>
            <Text className="meta-data">
              좋아요 갯수 & 실허요 갯수
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {isOpen && (
        <Modal
          blockScrollOnMount={true}
          closeOnOverlayClick={true}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          preserveScrollBarGap
          closeOnEsc
        >
          <ModalOverlay />
          <ModalBody>
            <ModalContent>
              <ModalCloseButton
                color="lightgrey"
                zIndex={2}
              />
              <AspectRatio ratio={16 / 9}>
                <Box flex="1">
                  <video
                    autoPlay
                    muted
                    loop
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                  ></video>
                </Box>
              </AspectRatio>
              <Box p="20px">
                <Box w="100%" pos="relative">
                  <Flex direction="row" align="center">
                    <Avatar size="sm" />
                    <Text mx="3">데이미언 루이스</Text>
                    <Text flex="1" color="primary">
                      팔로우
                    </Text>
                    <HStack>
                      <FcLike>하트</FcLike>
                      <span>
                        1.7<span>K</span>
                      </span>
                      <FaComment>댓글</FaComment>
                      <span>21</span>
                    </HStack>
                  </Flex>
                  <Box as="article">
                    <h3>제목이 들어갈 자리</h3>
                    <Text>
                      Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Fugiat
                      dignissimos enim ab debitis eaqum.
                    </Text>
                  </Box>
                  <hr />
                  <Box className="content-area">
                    <Flex className="myComment" mt="5">
                      <Avatar size="sm" />
                      <Input
                        ml="2"
                        flex="1"
                        type="text"
                        variant="flushed"
                      ></Input>
                    </Flex>
                    <List>
                      <ListItem>1</ListItem>
                      <ListItem>2</ListItem>
                      <ListItem>3</ListItem>
                      <ListItem>4</ListItem>
                    </List>
                  </Box>
                </Box>
              </Box>
            </ModalContent>

            <ModalFooter>wow</ModalFooter>
          </ModalBody>
        </Modal>
      )}
    </Box>
  );
};

export default PostItem;
