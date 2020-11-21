import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import PostTabButton from '../atoms/PostTabButton';
import PostItem from '../modules/home/PostItem';

interface Props {}

export interface ICategoryType {
  [key: string]: boolean;
}

const PostsList = (props: Props) => {
  const [categoryType, setType] = useState<ICategoryType>({
    total: true,
    music: false,
    design: false,
    mediaArt: false,
  });

  const changeCategoryType = (
    e: React.MouseEvent<Element>
  ) => {
    setType((state) => ({
      total: false,
      music: false,
      design: false,
      mediaArt: false,
      [(e.target as HTMLElement).classList[0]]: true,
    }));
  };

  return (
    <Box as="section" w="90vw" userSelect="none">
      <Box as="h2">장르별 아티스트 게시물</Box>
      <HStack
        listStyleType="none"
        onClick={changeCategoryType}
      >
        <PostTabButton name="total" type={categoryType}>
          전체
        </PostTabButton>
        <PostTabButton name="music" type={categoryType}>
          음악
        </PostTabButton>
        <PostTabButton name="design" type={categoryType}>
          디자인
        </PostTabButton>
      </HStack>
      <Divider mb="4" />
      <SimpleGrid minChildWidth="180px" spacing="16px">
        {Array(12)
          .fill(null)
          .map((v, i) => (
            <Box key={i}>
              <PostItem />
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default PostsList;
