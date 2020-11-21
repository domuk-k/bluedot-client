import { ListItem } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const UserNavListItem: React.FC<Props> = (props) => (
  <ListItem
    p="4px 2px"
    m="2px"
    borderRadius="5px"
    _hover={{ bg: 'grey.200' }}
  >
    {props.children}
  </ListItem>
);

export default UserNavListItem;
