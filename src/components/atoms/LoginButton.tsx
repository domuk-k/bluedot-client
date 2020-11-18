import { Button } from '@chakra-ui/core';
import { SearchIcon } from '@chakra-ui/icons';
import React, { memo } from 'react';
// import { SearchIcon } from '@chakra-ui/icons';

type LoginProps = {
  onClick(): void;
};

const LoginButton: React.FC<LoginProps> = ({ onClick }) => {
  return (
    <>
      <SearchIcon mr="9px" />
      <Button bg="primary" onClick={onClick}>
        회원가입/로긴
      </Button>
    </>
  );
};

export default memo(LoginButton);
