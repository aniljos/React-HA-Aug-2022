import { useContext } from "react";
import { AppThemeContext } from "./AppThemeContext";

function ThemeSwitchButton(){

    const theme = useContext(AppThemeContext);


    function switchTheme(){

        debugger;

        // change theme when using AppThemeProvider(useState)
            //theme.switchTheme();

        // change theme when using AppThemeProviderWithReducer(useReducer)
            theme.dispatch({type: "SWITCH_THEME"});
    }

    return <button className="btn btn-warning" onClick={switchTheme}>Switch Theme</button>
}

export default ThemeSwitchButton;