import { createTheme } from '@mui/material';
import { Fonts } from './Fonts';
export const Theme = createTheme({
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
      fontSize: 32,
      fontWeight: 600,
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
      fontSize: 17,
      fontWeight: 600,
    },
    body1: {
      fontFamily: Fonts.nunito,
      fontSize: 20,
      fontWeight: 400,
    },
    body2: {
      fontFamily: Fonts.nunito,
      fontSize: 17,
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
        },
      },
    },
    // MuiTabs: {
    //   styleOverrides: {
    //     root: {
    //       width: '50%',
    //     },
    //   },
    // },

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
