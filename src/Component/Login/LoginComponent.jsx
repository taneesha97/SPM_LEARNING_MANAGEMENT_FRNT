import React, {useEffect, useState} from 'react'
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, loginUserValidation} from "../../Action/Users";
import {useHistory} from "react-router";
import axios from "axios";
import AuthClass from "../../Validation/AuthClass";

function LoginComponent() {


    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    function SubmitPressed(e) {
        e.preventDefault();
        const newUser = {
            username,
            password
        }
        console.log(newUser);
        axios.post("http://localhost:8073/api/validate", newUser)
            .then(response => {
                let values = response.data;
                console.log('res1 ', response.data);
                console.log('res1 ', values[0]);
                if (values[1] == ""){
                    alert('Invalid Login')
                    history.push("/login");
                    setName("");
                    setPassword("");
                }else if (values[1] == "student"){
                    alert('Valid Login')
                    AuthClass.login(username,values)
                    history.push("/home");
                }else if (values[1] == "teacher"){
                    if (values[0] == "valid"){
                        alert('Valid Login')
                        AuthClass.login(username,values)
                        history.push("/tutordash");
                    }else{
                        setName("");
                        setPassword("");
                        alert('Teacher Status pending')
                        history.push("/login");
                    }

                }
            });
        // dispatch(loginUserValidation(newUser));
        // const response = useSelector((state) => state.userDetails1.loginUser);


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
                                   value={username}
                                   type="text"
                                   onChange = {(e) =>{
                                       setName(e.target.value);
                                   }}
                                   required
                            />
                            <br/>
                        </div>
                        <div>
                            <lable className="input-wrapper">Password</lable><br/>
                            <input className="input-field"
                                   placeholder="Enter Password..."
                                   type="password"
                                   value={password}
                                   onChange = {(e) =>{
                                       setPassword(e.target.value);
                                   }}
                                   required
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
