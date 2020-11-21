import { Box } from '@chakra-ui/core';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Logo = (props: Props) => {
  return (
    <Box as="h1" fontWeight="800" fontSize="1.4rem">
      <Link to="/">BLUEDOT</Link>
    </Box>
  );
};

export default memo(Logo);
