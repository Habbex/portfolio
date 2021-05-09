import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const darkTheme = {
    palette: {
        type: 'dark',
        primary: {
          main: '#1a1a2e',
          light: '#0f3460',
          dark: '#16213e',
        },
        secondary: {
          main: '#e94560',
        },
        warning: {
          main: '#fdb927',
        },
        info: {
          main: '#0d6c80',
        },
      },
}

export const CreateDarkTheme = (overrides = {}) =>
  responsiveFontSizes(createMuiTheme({
    ...darkTheme,
    ...overrides,
  })
  );