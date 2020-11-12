import {
  Box,
  Center,
  List,
  ListItem,
  Text,
} from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Carousel = (props: Props) => {
  return (
    <Box as="section" w="90vw" border="2px solid crimson">
      <Box as="h2">
        <Text d="inline-block" mr="1rem">
          아티스트 소개
        </Text>
        <Link to="/artists" style={{ fontSize: '.5rem' }}>
          전체 보기
        </Link>
      </Box>
      <List
        display="flex"
        wrap="nowrap"
        border="1px solid grey"
        overflowX="auto"
        align="center"
        listStyleType="none"
      >
        {Array(10)
          .fill(1)
          .map((v, i) => (
            <ListItem
              margin="0 10px"
              outline="solid 3px orange"
              h="80px"
              key={i}
            >
              <Center bg="blue.100">{v}</Center>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Carousel;
