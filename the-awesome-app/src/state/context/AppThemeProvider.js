import { useState } from "react";
import { AppThemeContext } from "./AppThemeContext";
///import { theme } from "./theme";

function AppThemeProvider(props){


    const switchTheme = () => {
        debugger;
       /// 1. setState(newState) 2. setState(function)
        setState((prevState) => {
            //return the new State
            const mode = prevState.mode === "dark" ? "light" : "dark";
            return {
                mode,
                switchTheme
            }
        });

    }

    const [state, setState] = useState({
        mode: "light",
        switchTheme
    });

    


    return (
        <>
            <AppThemeContext.Provider value={state}>
                {props.children}
            </AppThemeContext.Provider>
        </>
    )
}

export default AppThemeProvider;