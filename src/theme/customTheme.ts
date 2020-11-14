import { theme } from '@chakra-ui/core';

// add an alias for object responsive prop

const customTheme = {
  ...theme,
  styles: {
    ...theme.styles,
    global: {
      body: {
        color: '#181818',
      },
      h2: {},
    },
  },
  colors: {
    ...theme.colors,
    primary: {
      100: '#CFD1FD',
      200: '#A7ABFB',
      300: '#8388F9',
      400: '#6268F8',
      500: '#444BF7',
      600: '#262EF6',
      700: '#0B14F5',
      800: '#0911DD',
      900: '#080FC7',
    },
    basicBlack: '#181818',

    custom: {
      warn: '#ff4747',
      cta: '#0000FF',
      subtle: '#f1f1f1',
      subText: '#aaa',
    },
  },
};

export default customTheme;
