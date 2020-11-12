import { Button } from '@chakra-ui/core';
import React, { memo } from 'react';

interface Props {}

const Logo = (props: Props) => {
  return (
    <Button variant="outline" bg="primary.500">
      bluedot
    </Button>
  );
};

export default memo(Logo);
