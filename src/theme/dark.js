import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const darkTheme = {
    palette: {
        type: 'dark',
        primary: {
          main: '#ff5277',
        },
        secondary: {
          main: '#43a9a3',
        },
        divider: '#2d2d2d',
        background: {
          paper: '#0e141b',
          default: '#0e141b',
        },
        text: {
          primary: '#ffffff',
          secondary: '#818a91',
        },
      },
}

export const CreateDarkTheme = (overrides = {}) =>
  responsiveFontSizes(createMuiTheme({
    ...darkTheme,
    ...overrides,
  })
  );