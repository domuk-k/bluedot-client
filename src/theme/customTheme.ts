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
      h2: {
        fontSize: '2rem',
      },
    },
  },
  colors: {
    ...theme.colors,

    fontBlack: '#181818',

    custom: {
      paleLilac: '#efefff',
      sunflowerYellow: '#ffd200',
      warn: '#ff4747', //coral
      primary: '#0000FF',
      subText: '#aaa',
      grey: {
        100: '#f0f0f0',
        200: '#e2e2e2',
        300: '#b2b2b2',
        400: '#8d8d8d',
        500: '#565656',
        600: '#303030',
        700: '#000000',
      },
    },
  },
};

export default customTheme;
