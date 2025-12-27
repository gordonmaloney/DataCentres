import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E05244', // Red
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0F7173', // Teal
      contrastText: '#FFFFFF',
    },
    background: {
      default: 'white', // Deep Purple
      paper: 'white',   // Palette Purple
    },
    text: {
      primary: '#EBE4D1', // Cream
      secondary: '#d6ccb5', // Dimmed Cream
    },
    divider: 'rgba(235, 228, 209, 0.12)',
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontWeight: 800,
    },
    button: {
        textTransform: 'none',
        fontWeight: 700,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
        },
      },
    },
  },
});
