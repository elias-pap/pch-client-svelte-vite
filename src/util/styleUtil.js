import { createMuiTheme, withStyles } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  props: {
    MuiButton: {
      variant: 'contained',
    },
  },
  typography: {
    button: {
      fontSize: '1.4rem',
    },
  },
});

const globalStyles = {
  // buttonBackgroundColor: '#4bb39a',
};

const GlobalCss = withStyles({
  '@global': {
    // Tables
    '.MuiTableContainer-root': {
      borderRadius: '0.3rem',
    },
    '.MuiTable-root': {
      borderCollapse: 'separate',
      borderSpacing: '0 1rem',
    },
    '.MuiTableRow-root': {
      backgroundColor: 'rgba(241, 178, 75, 1)',
      transitionTimingFunction:
        'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)',
      transitionProperty: 'box-shadow, background-color',
      transitionDuration: '330ms, 330ms',
      transitionDelay: '0ms, 0ms',
    },
    '.MuiTableRow-root:hover': {
      boxShadow: 'rgba(255,255,255,0.8) 0 0 5px',
    },
    '.MuiTableCell-root': {
      border: 'solid 1px #000',
      borderStyle: 'solid none',
      padding: '10px',
      maxWidth: '10rem',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '.MuiTableCell-root:first-child': {
      borderLeftStyle: 'solid',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    '.MuiTableCell-root:last-child': {
      borderRightStyle: 'solid',
      borderBottomRightRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '.MuiTableRow-head': {
      backgroundColor: 'rgba(54, 132, 107, 1)',
    },
    '.MuiTableRow-head:hover': {
      boxShadow: 'none',
    },
    '.MuiTableCell-head': {
      fontWeight: 'bold',
      fontSize: '1.4rem',
      height: '5rem',
      borderStyle: 'solid none',
      borderWidth: 'medium',
    },

    // Buttons
    '.MuiButton-label': {
      fontWeight: 'bold',
    },

    // Icons
    '.MuiSvgIcon-root': {
      height: '1.8rem',
      width: '1.8rem',
    },
  },
})(() => null);

export { globalTheme, GlobalCss };
