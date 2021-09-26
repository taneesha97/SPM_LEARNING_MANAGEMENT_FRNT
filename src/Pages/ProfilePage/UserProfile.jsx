import React, {useEffect, useState} from 'react'
import './UserProfile.css'
import profilePic from "./images/profilePic.png";
import ProfileBio from "../../Component/Profile/ProfileBio";
import UserDetailsUpdateComponent from "../../Component/Profile/UserDetailsUpdateComponent";
import {fetchStudents, fetchTeachers, getUserByID, loggedUser} from "../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
import PasswordUpdateComponent from "../../Component/Profile/PasswordUpdateComponent";
function UserProfile() {
    const dispatch = useDispatch();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [popupName, setPopupName] = useState("");
    const response = useSelector((state) => state.userDetails1?.editDetail?.data);
    let userObject = localStorage.getItem("user")
    let user = JSON.parse(userObject)
    const user1 = useSelector((store) => store.userDetails1?.loginUser);
    console.log('12333', user1)

    const [result, setResult] = useState(response);


    useEffect(() => {
        dispatch(loggedUser(response))
    },[response])

    useEffect(() => {
        dispatch(getUserByID(user.id));

    },[])


    const updateEmail = () => {
        setButtonPopup(true);
        setPopupName("Email");
    }
    const updatePassword = () => {
        setButtonPopup1(true);
        setPopupName("Password");
    }



    return (<React.Fragment>
            <div>
                <div className="bluescreen">
                </div>

                <div className="bluescreen1">
                <ProfileBio user1 = {user1}/>
                </div>
                <div className="userprofile">
                    <div className="userprofile1">
                        <img src= {profilePic}  className="profilePic"/>
                        <div className="popupInterfaceUpdateEmail">
                            <UserDetailsUpdateComponent trigger={buttonPopup} setTrigger = {setButtonPopup} name = {result} name1 = {popupName} buttonPopup2 = {buttonPopup2} setButtonPopup2 = {setButtonPopup2}></UserDetailsUpdateComponent>
                            <PasswordUpdateComponent trigger={buttonPopup1} setTrigger = {setButtonPopup1} name = {popupName}></PasswordUpdateComponent>
                        </div>
                        <div className="userprofile1-info">
                            <h2 className="userprofile1-info-main">Taneesha</h2>
                            <div className="profitable-group">
                                <button className="userprofile-button1" onClick={updateEmail}>Update My Personal Details</button><br/>
                                <button className="userprofile-button1" onClick={updatePassword}>Update Password</button><br/>
                                <button className="userprofile-button1">My Transactions</button><br/>
                                <button className="userprofile-button2">Delete My Account</button><br/>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
    </React.Fragment>

    )
}

export default UserProfile
