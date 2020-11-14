import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { isForStatement } from 'typescript';
import Navigation from '../components/oraganisms/Navigation';

interface Props {}

const Profile = (props: Props) => {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <Navigation />
      <Box className="profile-cover_img" pos="relative">
        <AspectRatio minH="100px" ratio={16 / 3}>
          <Image
            src="https://images.unsplash.com/photo-1531481517150-2228446fb6b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            //   bgSize="cover"
            //   bgPos="50%"
            //   backgroundImage="url(https://images.unsplash.com/photo-1592396629010-64d6fc2603be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80)"
          />
        </AspectRatio>
        <Button
          pos="absolute"
          size="sm"
          bottom="10%"
          right="5%"
        >
          편집
        </Button>
      </Box>
      <Container maxW="lg">
        <Box p="4">
          <Flex justify="space-between" wrap="wrap">
            <Box flex="1">
              <Flex>
                <Avatar mr="10px" />
                <Box w="100%" pos="relative">
                  <Flex direction="column" h="100%">
                    <Text>데이미언 루이스</Text>
                    <Text color="custom.subText">
                      싱어송라이터, 시인
                    </Text>
                    <HStack>
                      <span>팔로</span>
                      <span>20</span>
                      <span>닷비디오</span>
                      <span>21</span>
                    </HStack>
                  </Flex>
                  {auth && (
                    <Button
                      pos="absolute"
                      right="0"
                      top="0"
                    >
                      프로필 관리
                    </Button>
                  )}
                </Box>
              </Flex>
              <Text>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Porro accusantium officia
                delectus veritvoluptates neque ullam iure,
                ipsa adipisci!
              </Text>
            </Box>
            <Box flex="1" m="0 10px">
              <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"></video>
            </Box>
          </Flex>
        </Box>
        <Container bg="yellow.300" className="artist-posts">
          <Box className="tab-menu">
            <Button as="h3">게시물</Button>
            <Button as="h3">닷비디오</Button>
          </Box>
          <SimpleGrid
            bg="violet.100"
            as="ul"
            minChildWidth="120px"
            spacing="10px"
          >
            {Array(12)
              .fill(null)
              .map((v, i) => (
                <ListItem d="inline" bg="cyan.200">
                  {i}
                </ListItem>
              ))}
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};

export default Profile;
