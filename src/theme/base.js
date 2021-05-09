import {CreateLightTheme } from "./light"; 
import { CreateDarkTheme } from "./dark";

const dark= CreateDarkTheme();
const normal= CreateLightTheme();
const themes={
    normal,
    dark,
}

export default function getTheme(theme){
    return themes[theme];
}