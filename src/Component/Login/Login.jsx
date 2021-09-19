import React from 'react'
import './Login.css'
import LoginLogo from './Images/LoginLogo.png';
import LoginComponent from "./LoginComponent";
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography
} from "@material-ui/core";

function Login(props) {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    return (
        <div className="login">
            <div className="leftLogin">
                <img src={LoginLogo} className="login-image1" />
                <div className="login-info2">
                    <h2 className="login-info2-main">Welcome</h2>
                </div>
            </div>
            <div className="login-info">
                <LoginComponent setBackground={props.setBackground} />
            </div>
        </div>

    )
}

export default Login
