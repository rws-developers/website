import { createTheme } from '@mui/material/styles';

const westernTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d8a15b',
      light: '#f0c98e',
      contrastText: '#1c1209'
    },
    secondary: {
      main: '#7cb8c9'
    },
    background: {
      default: '#0f0b08',
      paper: '#1a130e'
    },
    text: {
      primary: '#f5e8d4',
      secondary: '#dac3a1'
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: 'var(--font-body), sans-serif',
    h1: {
      fontFamily: 'var(--font-display), sans-serif',
      letterSpacing: '0.02em',
      fontWeight: 700
    },
    h2: {
      fontFamily: 'var(--font-display), sans-serif',
      letterSpacing: '0.015em',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'var(--font-display), sans-serif',
      fontWeight: 600
    },
    button: {
      fontFamily: 'var(--font-display), sans-serif',
      textTransform: 'none',
      letterSpacing: '0.01em',
      fontWeight: 600
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(216, 161, 91, 0.28)',
          backdropFilter: 'blur(10px)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage:
            'linear-gradient(160deg, rgba(43, 27, 16, 0.95), rgba(13, 22, 36, 0.94))',
          boxShadow: '0 14px 36px rgba(7, 4, 2, 0.45)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 1,
            borderRadius: 16,
            border: '1px solid rgba(240, 201, 142, 0.14)',
            pointerEvents: 'none'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 18,
          paddingBlock: 8
        },
        containedPrimary: {
          boxShadow: '0 10px 24px rgba(216, 161, 91, 0.34)'
        }
      }
    }
  }
});

export default westernTheme;
