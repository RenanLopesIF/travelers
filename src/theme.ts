import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    500: '#f0c',
  },
  gray: {
    50: '#f2f2f2',
    100: '#dcd8d9',
    200: '#bfbfbf',
  },
  black: {
    50: 'rgba(0,0,0,0.04)',
    100: 'rgba(0,0,0,0.08)',
    200: 'rgba(0,0,0,0.12)',
    300: 'rgba(0,0,0,0.15)',
    400: 'rgba(0,0,0,0.3)',
    500: 'rgba(0,0,0,0.45)',
    600: 'rgba(0,0,0,0.6)',
    700: 'rgba(0,0,0,0.75)',
    800: 'rgba(0,0,0,0.9)',
  },
};

const theme = extendTheme({ colors });
export default theme;
