import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import PostTabButton from '../atoms/PostTabButton';

interface Props {}

const PostsList = (props: Props) => {
  const [type, setType] = useState({
    total: true,
    music: false,
    design: false,
    mediaArt: false,
  });

  const changeType = (e: any) => {
    setType((state) => ({
      total: false,
      music: false,
      design: false,
      mediaArt: false,
      [e.target.classList[0]]: true,
    }));
  };

  return (
    <Box as="section" w="90vw" userSelect="none">
      <Box as="h2">장르별 아티스트 게시물</Box>
      <HStack listStyleType="none" onClick={changeType}>
        <PostTabButton
          name="total"
          bg={type.total ? 'custom.cta' : 'transparent'}
          color={type.total ? 'white' : 'inherit'}
        >
          전체
        </PostTabButton>
        <PostTabButton
          name="music"
          bg={type.music ? 'custom.cta' : 'transparent'}
          color={type.music ? 'white' : 'inherit'}
        >
          음악
        </PostTabButton>
        <PostTabButton
          name="design"
          bg={type.design ? 'custom.cta' : 'transparent'}
          color={type.design ? 'white' : 'inherit'}
        >
          디자인
        </PostTabButton>
        <PostTabButton
          name="mediaArt"
          bg={type.mediaArt ? 'custom.cta' : 'transparent'}
          color={type.mediaArt ? 'white' : 'inherit'}
        >
          미디어아트
        </PostTabButton>
      </HStack>
      <Divider mb="4" />
      <SimpleGrid minChildWidth="180px" spacing="16px">
        {Array(12)
          .fill(null)
          .map((v, i) => (
            <Box
              key={i}
              minH="150px"
              w="100%"
              fontSize=".8rem"
            >
              <Image src="https://i.ytimg.com/vi/mxJGDa7ThbE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD2kF6j-nY8rIHfCDZqEIcUqGnuhQ" />
              <Flex>
                <Avatar size="sm" my="5px" mr="5px" />
                <Flex flexShrink={1} wrap="wrap">
                  <Text d="block">
                    Lorem iorum nihil,s? Animi doloribus
                    mollitia nam ab
                  </Text>
                  <Flex w="100%" justify="space-between">
                    <Text>침착맨</Text>
                    <Text className="meta-data">
                      좋아요 갯수 & 실허요 갯수
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default PostsList;
