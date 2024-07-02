import { lightBlue } from '@mui/material/colors';

const color = {
  primary: '#15202B',
  50: '#334E69',
  100: '#314B65',
  200: '#2E465E',
  300: '#2B4158',
  400: '#273C51',
  500: '#24374A',
  600: '#213243',
  700: '#1D2D3C',
  800: '#1A2835',
  900: '#17232E',
  950: '#15202B'
};

const borderColor = color['100'];

export default {
  // palette values for dark mode

  contrastThreshold: 4.5,
  primary: lightBlue,
  borderColor,
  text: {
    primary: '#EBEBEB'
  },
  background: {
    default: color.primary
  },
  Accordion: {
    background: color['700']
  },
  TextField: {
    background: color['700'],
    disabledBackground: color['200'],
    focusBgColor: color['500'],
    borderColor: color['300'],
    hoverBgColor: color['500']
  },
  DataTable: {
    headerColor: color[800],
    rowColor: color[900],
    scrollbarColor: color[400],
    scrollbarHoverColor: color[100]
  },
  Table: {
    headerColor: color[600]
  },
  CUIBanner: {
    backgroundColor: color[700]
  },
  logoTextColor: 'white'
};
