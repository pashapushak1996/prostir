import {createTheme} from '@shopify/restyle';

const palette = {
  green: '#57CC99',
  greenDarker: '#41C48B',
  black: '#001306',
  gray: '#667169',
  grayLighter: '#B3B8B4',
  silver: '#B3B8B4',
  silverDarker: '#E8EAE9',
  white: '#FFFFFF',
  red: '#FF0000',
};

const theme = createTheme({
  colors: {
    primary: palette.green,
    primaryDarker: palette.greenDarker,
    text: palette.black,
    textSecondary: palette.white,
    mainBackground: palette.white,
    transparent: 'transparent',
  },
  spacing: {
    ml: 16,
    l: 20,
  },
  borderRadii: {
    '0': 0,
    s: 8,
    m: 10,
    ml: 16,
    l: 22,
    xl: 32,
    inf: 1000,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
    buttonLabel: {fontSize: 16, color: 'textSecondary', fontWeight: '700'},
  },
});

export type Theme = typeof theme;
export default theme;
