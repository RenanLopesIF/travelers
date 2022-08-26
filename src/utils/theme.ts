import { extendTheme } from '@chakra-ui/react';

export const colors = {
  primary: {
    50: '#dcf8ff',
    100: '#b2e5fc',
    200: '#86d3f6',
    300: '#59c1f0',
    400: '#2dafeb',
    500: '#1496d2',
    600: '#0574a4',
    700: '#005376',
    800: '#00334a',
    900: '#00131d',
  },
  gray: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
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
}

const theme = extendTheme({
  colors,
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

export default theme;
