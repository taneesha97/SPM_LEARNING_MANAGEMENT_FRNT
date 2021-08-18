import React from 'react'
import './Login.css'

function LoginComponent() {
    return (
        <div>
            <form>
                    <div className="login-info4">
                        <h2 className="login-info4-main">Login</h2>
                        <h4 className="login-info4-second">Login to get access to premium features and discounts</h4>
                    </div>

                    <div className="login-body">
                        <div>
                            <lable className="input-wrapper">Name</lable><br/>
                            <input className="input-field"
                                   placeholder="Enter Name..."
                                   type="text"
                            />
                            <br/>
                        </div>
                        <div>
                            <lable className="input-wrapper">Password</lable><br/>
                            <input className="input-field"
                                   placeholder="Enter Password..."
                                   type="password"
                            />
                        </div>
                        <div>
                            <input type="checkbox" className="input-field1" value="Remember me"/>
                            <lable className="input-wrapper">Remember me</lable><br/>
                        </div>

                        <div className="button-group">
                            <button className="auth-button" type="submit">Login</button><br/>
                        </div>
                        <div className="login-info5">
                            <h2 className="login-info5-main">New to the site?</h2>
                            <h4 className="login-info5-second">Sign up</h4>
                        </div>
                        <div className="login-info6">
                            <h2 className="login-info6-main">Forgot Password?</h2>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default LoginComponent
