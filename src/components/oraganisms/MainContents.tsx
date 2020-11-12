import { Box, ChakraProps } from '@chakra-ui/core';
import React from 'react';

interface IMainContents extends ChakraProps {}

const MainContents: React.FC<IMainContents> = (props) => {
  return <Box {...props}></Box>;
};

export default MainContents;
