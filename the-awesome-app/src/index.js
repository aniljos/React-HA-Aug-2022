import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MuiApp from "./MuiApp";
import reportWebVitals from "./reportWebVitals";
import { store } from "./state/redux/store";
import { Provider } from "react-redux";
import { AppThemeContext } from "./state/context/AppThemeContext";
import { theme } from "./state/context/theme";
import AppThemeProvider from "./state/context/AppThemeProvider";
import AppThemeProviderWithReducer from "./state/context/AppThemeProviderWithReducer";
import AppErrorBoundary from "./error-boundary/AppErrorBoundary";
import './axios/interceptors';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AppThemeContext.Provider value={theme}> */}
    {/* <AppThemeProvider> */}
    <AppThemeProviderWithReducer>
      <Provider store={store}>
        <AppErrorBoundary>
              {/* <App /> */}
              <MuiApp/>
        </AppErrorBoundary>
      </Provider>
    </AppThemeProviderWithReducer>
    {/* </AppThemeProvider> */}
    {/* </AppThemeContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
