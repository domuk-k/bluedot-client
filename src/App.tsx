import * as React from 'react';
import Router from './pages/Router';
import { CSSReset, ChakraProvider } from '@chakra-ui/core';
import customTheme from './theme/customTheme';

export const App: React.FC = () => (
  <ChakraProvider theme={customTheme} resetCSS={true}>
    <CSSReset />
    <Router />
  </ChakraProvider>
);
