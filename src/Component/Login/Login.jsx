import React from 'react'
import './Login.css'
import LoginLogo from './Images/LoginLogo.png';
import LoginComponent from "./LoginComponent";

function Login() {
    return (
        <div>
            <h1>Login page</h1>
            <div className="login">
                <div>
                    <img src= {LoginLogo}  className="login-image1"/>
                </div>
                <div className="login-info2">
                    <h2 className="login-info2-main">Welcome</h2>
                    <h4 className="login-info2-second">User1</h4>
                </div>
                <div className="login-info">
                    <LoginComponent/>
                </div>
            </div>

        </div>
    )
}

export default Login
