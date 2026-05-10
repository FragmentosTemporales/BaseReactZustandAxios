import { createTheme } from '@mui/material/styles';
import fonts from './fonts';

const theme = createTheme({
  typography: {
    fontFamily: fonts.primary,
    h1: {
      fontFamily: fonts.secondary,
    },
    h2: {
      fontFamily: fonts.secondary,
    },
    body1: {
      fontFamily: fonts.primary,
    },
  },
});

export default theme;