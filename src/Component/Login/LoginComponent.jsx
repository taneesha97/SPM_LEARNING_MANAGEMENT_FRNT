import React, {useState} from 'react'
import './Login.css'
import {useDispatch} from "react-redux";
import {loginUserValidation} from "../../Action/Users";
import {useHistory} from "react-router";

function LoginComponent() {


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    function SubmitPressed(e) {
        e.preventDefault();
        const newUser = {
            name,
            password
        }
        console.log(newUser);
        dispatch(loginUserValidation(newUser));
    }

    const NavigateToRegistration = () => {
        history.push("/registration");
    }

    return (
        <div>
            <form onSubmit={SubmitPressed}>
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
                                   onChange = {(e) =>{
                                       setName(e.target.value);
                                   }}
                            />
                            <br/>
                        </div>
                        <div>
                            <lable className="input-wrapper">Password</lable><br/>
                            <input className="input-field"
                                   placeholder="Enter Password..."
                                   type="password"
                                   onChange = {(e) =>{
                                       setPassword(e.target.value);
                                   }}
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
                            <h4 className="login-info5-second" onClick={NavigateToRegistration}>Sign up</h4>
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
