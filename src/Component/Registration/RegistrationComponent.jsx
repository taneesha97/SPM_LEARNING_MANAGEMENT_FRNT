import React, {useEffect, useState} from 'react'
import './Registration.css'
import {useDispatch, useSelector} from "react-redux";
import {addUsers, loginUserValidation} from "../../Action/Users";
import {useHistory} from "react-router";
import CustomAlert from "../CustomAlert/CustomAlert";
import UserDetailsUpdateComponent from "../Profile/UserDetailsUpdateComponent";
import UnSuccessPopup from "../PopupModel/UnSuccessPopup";
import SucessPopUp from "../PopupModel/SucessPopUp";

import PopupModel from "../PopupModel/PopupModel";

function   RegistrationComponent() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [username, setUsername] = useState("");
    const [type, setType] = useState('teacher');
    const [password1, setPassword] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [popupName, setPopupName] = useState("");
    const [popupLocation, setPopupLocaion] = useState("");
    const [successmessage, setSuccessmessage] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const crypto = require('crypto'),
        hash = crypto.getHashes();
    // const passwordHash = require('password-hash');
    // const hashedPassword = passwordHash.generate('password123');
    //
    // console.log(hashedPassword);
    let response1 = useSelector((state) => state.userDetails1?.error);
    console.log(response1);

    let response2 = useSelector((state) => state.userDetails1?.UserDetails?.success);
    console.log(response2);

    const dataClear = () => {
        setName("");
        setEmail("");
        setAge("");
        setUsername("");
        setPassword("");
        setType('teacher');
    }
    // if (response2 === 'User inserted successfully'){
    //     setSuccessmessage(true)
    // }


    function SubmitPressed(e) {
        e.preventDefault();

        let status = "";
        if (type == 'student'){
            status = 'valid';
        }
        if(type == 'teacher'){
            status = 'pending';
        }

        let password = crypto.createHash('sha1').update(password1).digest('hex');

        console.log(password);

        const newUser = {
            name,
            email,
            age,
            username,
            status,
            password,
            type,
        }
        console.log(newUser);
        dispatch(addUsers(newUser));
        // if (successmessage === true){
        //     console.log('calling123')
        // }

        // if (response1 === 'User inserted successfully'){
        //
        // }
        // const response = useSelector((state) => state.errors);
        // console.log(response);


    }
    useEffect(() => {
        //alert('error message')

        if (response2 === 'User inserted successfully'){
            setPopupName("register");
            setPopupLocaion("/login");
            setButtonPopup(true);
        }
    },[response2])

    useEffect(() => {
        //alert('error message')
        if (response1 === 'username exists'){
            setType('teacher');
            setPopupName("User already exists");
            setPopupLocaion("/registration");
            setButtonPopup1(true);
        }
    },[response1])



    return (
        <div>
            <PopupModel show={buttonPopup} buttondisble = {false}>
                <SucessPopUp trigger={buttonPopup} setTrigger = {setButtonPopup} name1 = {popupName} name2 = {popupLocation}></SucessPopUp>
            </PopupModel>
            <PopupModel show={buttonPopup1} buttondisble = {false}>
                <UnSuccessPopup trigger={buttonPopup1} setTrigger = {setButtonPopup1} name1 = {popupName} name2 = {popupLocation}></UnSuccessPopup>
            </PopupModel>

            <form onSubmit={SubmitPressed}>
                <div className="registration-info4">
                    <h2 className="registration-info4-main">Registration</h2>
                    <h4 className="registration-info4-second">Register to get access to premium features and discounts</h4>
                </div>

                <div className="registration-body">
                    <div>
                        <lable className="input-wrapper">Name</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Name..."
                               type="text"
                               onChange = {(e) =>{
                                   setName(e.target.value);
                               }}
                               required
                        />
                        <br/>
                    </div>
                    <div>
                        <lable className="input-wrapper">Email</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Email..."
                               type="email"
                               onChange = {(e) =>{
                                   setEmail(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">Age</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Age..."
                               type="number"
                               onChange = {(e) =>{
                                   setAge(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">User Name</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Username..."
                               type="text"
                               onChange = {(e) =>{
                                   setUsername(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">Password</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Password..."
                               type="password"
                               onChange = {(e) =>{
                                   setPassword(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">User Type</lable><br/>
                        <input type="radio" id="teacher" name="fav_language" value="teacher" className="input-field1"
                               onChange = {(e) =>{
                                   setType(e.target.value);
                               }}/>
                        <label htmlFor="teacher">Teacher</label><br/>
                        <input type="radio" id="student" name="fav_language" value="student" className="input-field1"
                               onChange = {(e) =>{
                                   setType(e.target.value);
                               }}/>
                        <label htmlFor="student">Student</label>
                    </div><br/>

                    <div className="registration-button-group">
                        <button className="registration-button" type="submit">Register</button><br/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationComponent