import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#D4DCA4', // Primary color
    },
    secondary: {
      main: '#A4B494', 
    },
    background: {
      default: '#F9F9F9', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', 
  },
});

export default globalTheme;
