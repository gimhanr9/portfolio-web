import { Palette } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import { Colors } from './Colors';
import { Fonts } from './Fonts';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: '',
          divider: '',
          text: {
            primary: '',
            secondary: '',
          },
        }
      : {
          // palette values for dark mode
          primary: '',
          divider: '',
          background: {
            default: '#0b1120',
            secondary: '#151c2e',
            tertiary: '#242b3c',
            paper: '',
          },
          text: {
            primary: '#60A5FA',
            secondary: '#ffffff',
          },
        }),
  },
});

export const Theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#2E2252',
      secondary: '#000000',
    },

    background: {
      default: Colors.primaryBg,
      secondary: Colors.secondaryBg,
      paper: Colors.white,
    },

    primary: {
      main: '#2E2252',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },
    secondary: {
      main: '#757ce8',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },
    tertiary: {
      main: Colors.white,
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },

    // error: {
    //   main: Colors.error,
    //   light: Colors.errorLight,
    //   dark: Colors.errorDark,
    //   contrastText: Colors.errorText,
    // },
    // white: {
    //   main: Colors.white,
    //   contrastText: Colors.black,
    // },
    // black: {
    //   main: Colors.black,
    //   contrastText: Colors.white,
    // },
    // specialBlue: {
    //   main: Colors.blueHighlight,
    //   light: Colors.blueText,
    //   dark: Colors.secondary,
    //   contrastText: Colors.white,
    // },
  },
  typography: {
    h1: {
      fontFamily: Fonts.jura,
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontFamily: Fonts.jura,
      fontSize: 34,
      fontWeight: 700,
    },
    h3: {
      fontFamily: Fonts.jura,
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontFamily: Fonts.jura,
      fontSize: 34,
      fontWeight: 700,
    },
    h5: {
      fontFamily: Fonts.jura,
      fontSize: 28,
      fontWeight: 700,
    },
    h6: {
      fontFamily: Fonts.jura,
      fontSize: 24,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: Fonts.nunito,
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontFamily: Fonts.nunito,
      fontSize: 20,
      fontWeight: 400,
    },
    body2: {
      fontFamily: Fonts.nunito,
      fontSize: 18,
      fontWeight: 500,
    },
    caption: {
      fontFamily: Fonts.nunito,
      fontSize: 15,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.nunito,
          fontSize: 17,
          textTransform: 'none',
          borderRadius: 25,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.nunito,
          fontSize: 16,
          fontWeight: '400',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.nunito,
          fontSize: 16,
          fontWeight: '600',
          textTransform: 'none',
          color: '#ffffff',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          background: '#2E2252',
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        root: {
          display: 'list-item',
          listStyleType: 'disc',
          fontSize: 17,
        },
        primary: {
          fontFamily: Fonts.nunito,
          fontSize: 16,
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.nunito,
          fontSize: 14,
          fontWeight: 600,
          padding: 3,
        },
      },
    },
  },
});
