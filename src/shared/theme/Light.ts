import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#ffff',
    },
    secondary: {
      main: cyan[400],
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#ffff',
    },
    background: {
      paper: '#ffff',
      default: '#f7f6f3',
    },
  },
});
