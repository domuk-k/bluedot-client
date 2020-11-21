import { Box, Button, Flex } from '@chakra-ui/core';
import React, { memo, ReactChild } from 'react';
// import { SearchIcon } from '@chakra-ui/icons';

type LoginProps = {
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  children: ReactChild;
};

const NavPrimaryButton: React.FC<LoginProps> = (props) => {
  return (
    <>
      <Button bg="primary" {...props}></Button>
    </>
  );
};

export default memo(NavPrimaryButton);
