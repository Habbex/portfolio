import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = {
    palette: {
        type: 'light',
        primary: {
          main: '#ff9d00',
          light: '#ffca00',
        },
        secondary: {
          main: '#bae8e8',
        },
        divider: '#e3f6f5',
        background: {
          paper: '#fffffe',
          default: '#fffffe',
        },
        text: {
          primary: '#272343',
          secondary: '#2d334a',
        },
      },
}

export const CreateLightTheme= (overrides={})=>
responsiveFontSizes(createMuiTheme({
    ...lightTheme,
    ...overrides
})
);