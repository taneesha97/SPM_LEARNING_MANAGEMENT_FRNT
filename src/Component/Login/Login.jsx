import React from 'react'
import './Login.css'
import LoginLogo from './Images/LoginLogo.png';

function Login() {
    return (
        <div>
            <p>Login Component</p>
            <div className="login">
                <div>
                    <img src= {LoginLogo}  className="login-image1"/>
                </div>
                <div className="login-info2">
                    <h2 className="login-info2-main">Welcome</h2>
                    <h4 className="login-info2-second">User1</h4>
                </div>
                <div className="login-info">
                    <div className="login-info3">
                        <h2 className="login-info3-main">Welcome</h2>
                        <h4 className="login-info3-second">User1</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
