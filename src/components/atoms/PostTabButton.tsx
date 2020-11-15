import { ChakraProps, ListItem } from '@chakra-ui/core';
import React from 'react';

interface postTabButtonProps extends ChakraProps {
  name: string;
}

const PostTabButton: React.FC<postTabButtonProps> = (
  props
) => {
  return (
    <ListItem
      className={props.name}
      rounded="2px"
      p="0 8px"
      {...props}
    >
      {props.children}
    </ListItem>
  );
};

export default PostTabButton;
