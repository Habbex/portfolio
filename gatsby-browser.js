import React from "react"
import CustomThemeProvider from "./src/theme/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

export const wrapRootElement=({element}) =>{
    console.info(`element`,element)
    return   <CustomThemeProvider> {element} <CssBaseline/> </CustomThemeProvider>
}