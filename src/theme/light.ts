import { lightBlue } from '@mui/material/colors';

const color = {
  primary: '#FCFCFC',
  50: '#FCFCFC',
  100: '#FAFAFA',
  200: '#F5F5F5',
  300: '#F0F0F0',
  400: '#EBEBEB',
  500: '#E6E6E6',
  600: '#E0E0E0',
  700: '#DBDBDB',
  800: '#D6D6D6',
  900: '#D1D1D1',
  950: '#CFCFCF'
};

const borderColor = color[950];

export default {
  // palette values for dark mode

  contrastThreshold: 4.5,
  primary: lightBlue,
  borderColor,
  text: {
    primary: '#00000'
  },
  background: {
    default: color.primary
  },
  Accordion: {
    background: color[400]
  },
  TextField: {
    background: 'white',
    disabledBackground: color['950'],
    focusBgColor: color['500'],
    borderColor: color['300'],
    hoverBgColor: color['500']
  },
  DataTable: {
    headerColor: color[500],
    rowColor: color[200],
    scrollbarColor: color[700],
    scrollbarHoverColor: color[950]
  },
  Table: {
    headerColor: color[500]
  },
  CUIBanner: {
    backgroundColor: color[400]
  },
  logoTextColor: 'black'
};
