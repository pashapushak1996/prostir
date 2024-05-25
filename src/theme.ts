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
    secondary: palette.grayLighter,
    text: palette.black,
    textSecondary: palette.white,
    mainBackground: palette.white,
    transparent: 'transparent',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 14,
    ml: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadii: {
    '0': 0,
    s: 8,
    m: 10,
    ml: 16,
    l: 22,
    xl: 32,
    xxl: 42,
    inf: 1000,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {fontFamily: 'OpenSans'},
    pageHeader: {
      color: 'primary',
      fontWeight: '700',
      fontSize: 48,
    },
    mainLabel: {fontSize: 18, fontWeight: '500', color: 'text'},
    mainLabelSmaller: {fontSize: 16, fontWeight: '600', color: 'text'},
    inputLabel: {fontSize: 16, fontWeight: '600', color: 'text'},
    buttonLabel: {fontSize: 16, color: 'textSecondary', fontWeight: '700'},
  },
  textInputVariants: {
    defaults: {
      borderRadius: 'xxl',
      backgroundColor: 'mainBackground',
      padding: 'm',
      color: 'text',
      borderWidth: 1,
      borderColor: 'secondary',
    },
  },
});

export type Theme = typeof theme;
export default theme;
