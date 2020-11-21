import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/core';
import React, {
  ReactElement,
  useCallback,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import NavPrimaryButton from '../atoms/NavPrimaryButton';
import Logo from '../atoms/Logo';
import NavList from '../atoms/NavList';
import MailCheckModal from '../modules/home/MailCheckModal';
import SignUpModal from '../modules/home/SignUpModal';
import UserNavigation from '../modules/home/UserNavigation';

enum ModalTypes {
  mailCheck,
  signIn,
}

export default function Navigation(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = true;
  const [modal, setModalMode] = useState(
    ModalTypes['mailCheck']
  );

  const signInAndUp = useCallback(() => {
    setModalMode(0);
    onOpen();
  }, [onOpen]);

  const TypedModal = useCallback(
    (type: ModalTypes) => {
      switch (type) {
        case 0:
          return (
            <MailCheckModal setModalMode={setModalMode} />
          );
        case 1:
          return (
            <SignUpModal setModalMode={setModalMode} />
          );

        default:
          return <Redirect to="/" />;
      }
    },
    [setModalMode]
  );

  return (
    <Box
      className="nav-wrapper"
      as="nav"
      p=".5rem"
      color="white"
      w="100vw"
      bg="rgba(0,0,0,.3)"
      pos="fixed"
      userSelect="none"
      zIndex="2"
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <Flex
        className="nav-container"
        align="center"
        justify="space-between"
        w="85vw"
        m="auto"
      >
        <Logo />
        <NavList />
        {auth ? (
          <UserNavigation />
        ) : (
          <NavPrimaryButton onClick={signInAndUp}>
            로그인/회원가입
          </NavPrimaryButton>
        )}

        {isOpen && (
          <Modal
            blockScrollOnMount={true}
            closeOnOverlayClick={true}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            preserveScrollBarGap
          >
            <ModalOverlay />
            {TypedModal(modal)}
          </Modal>
        )}
      </Flex>
    </Box>
  );
}
