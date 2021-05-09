import React, { useContext } from 'react'
import { CustomThemeContext } from "../theme/CustomThemeProvider";
import { FormControlLabel, Switch } from "@material-ui/core";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const ThemeSwitcher = () => {
    const { currentTheme, setTheme } = useContext(CustomThemeContext)

    const isDarkTheme = Boolean(currentTheme === "dark")

    const handleThemeChange = (event) => {
        const { checked } = event.target;
        if (checked) {
            setTheme("dark");
        } else {
            setTheme("normal");
        }
    }

    return (
        <>
            <FormControlLabel
                control={
                    <Switch color="secondary" checked={isDarkTheme} onChange={handleThemeChange} inputProps={{'aria-label':'primary checkbox'}}/>
                }
                label={isDarkTheme ? <NightsStayIcon/>: <WbSunnyIcon/>}
            />
        </>
    )
}

export default ThemeSwitcher