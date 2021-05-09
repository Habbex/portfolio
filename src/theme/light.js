import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = {
    palette: {
        type: 'light',
        primary: {
          main: '#152935',
          light: '#00c3ea',
          dark: '#005075',
        },
        secondary: {
          main: '#fc4e3d',
        },
        warning: {
          main: '#fdb927',
        },
        info: {
          main: '#0d6c80',
        },
        background: {
          default: '#f2f5f8',
        },
        text: {
            primary: '#152935', // YankeesBlue
            secondary: '#5A6872', //Cadet
            disabled: '#9DA6AD', // QuickSilver
            hint: '#C1C1C4', // SilverSand
          },
      },
}

export const CreateLightTheme= (overrides={})=>
responsiveFontSizes(createMuiTheme({
    ...lightTheme,
    ...overrides
})
);