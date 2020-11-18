import { ChakraProps, ListItem } from '@chakra-ui/core';
import React from 'react';
import { ICategoryType } from '../oraganisms/PostsList';

interface postTabButtonProps extends ChakraProps {
  name: string;
  type: ICategoryType;
}

const PostTabButton: React.FC<postTabButtonProps> = (
  props
) => {
  return (
    <ListItem
      className={props.name}
      rounded="2px"
      p="0 8px"
      bg={
        props.type[props.name] ? 'primary' : 'transparent'
      }
      color={props.type[props.name] ? 'white' : 'inherit'}
      {...props}
    >
      {props.children}
    </ListItem>
  );
};

export default PostTabButton;
