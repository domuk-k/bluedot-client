import { Box, Button } from '@chakra-ui/core';
import React, { memo } from 'react';

interface Props {}

const Logo = (props: Props) => {
  return <Button fontWeight="800">BLUEDOT</Button>;
};

export default memo(Logo);
