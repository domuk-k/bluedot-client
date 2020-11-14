import React from 'react';
import { Text } from '@chakra-ui/core';

const InputErrorMessage: React.FC = ({ children }) => {
  return (
    <Text color="crimson" fontSize=".9rem" m="0">
      {children}
    </Text>
  );
};

export default InputErrorMessage;
