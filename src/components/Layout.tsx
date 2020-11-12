import { Flex } from '@chakra-ui/core';
import React from 'react';

const Layout: React.FC = (props) => {
  return (
    <Flex
      className="layout"
      direction="column"
      align="center"
      overflowX="hidden"
      {...props}
    />
  );
};

export default Layout;
