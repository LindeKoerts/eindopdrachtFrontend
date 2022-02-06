import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TempContextProvider from "./context/TempContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScreenWidthContextProvider from "./context/screenWidthContext";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <TempContextProvider>
            <AuthContextProvider>
            <ScreenWidthContextProvider>
            <App/>
                <ToastContainer autoClose={3000}/>
            </ScreenWidthContextProvider>
            </AuthContextProvider>
        </TempContextProvider>
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
