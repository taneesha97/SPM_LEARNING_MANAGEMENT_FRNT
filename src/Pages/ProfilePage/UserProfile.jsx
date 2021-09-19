import React, {useEffect, useState} from 'react'
import './UserProfile.css'
import profilePic from "./images/profilePic.png";
import UserDetailsUpdateComponent from "../../Component/Profile/UserDetailsUpdateComponent";
import {fetchStudents, getUserByID, loggedUser} from "../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
import PasswordUpdateComponent from "../../Component/Profile/PasswordUpdateComponent";
function UserProfile() {
    const dispatch = useDispatch();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [popupName, setPopupName] = useState("");

    let userObject = localStorage.getItem("user")
    let user = JSON.parse(userObject)
    // console.log('retrievedObject: ', user);
    const updateEmail = () => {
        setButtonPopup(true);
        setPopupName("Email");
    }
    const updatePassword = () => {
        setButtonPopup1(true);
        setPopupName("Password");
    }
    useEffect(() => {
        dispatch(getUserByID(user.id));
    },[])

    const user1 = useSelector((store) => store.userDetails1?.loginUser);
    console.log('12333', user1)
    const response = useSelector((state) => state.userDetails1?.editDetail?.data);
    dispatch(loggedUser(response))
    const [result, setResult] = useState(response);
    return (<React.Fragment>
            <div>
                <div className="bluescreen">
                </div>

                <div className="bluescreen1">
                    <div className="userprofile-bio">
                        <div className="userprofile-bio1">
                            <div className="userprofile-bio1-info1">
                                <div className="text-center">
                                    <h2 className="userprofile-bio1-info1-main">Personal Details</h2>
                                </div>
                                <div className="card">
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user1?.name}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user1?.email}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Age</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user1?.age}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Position</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user1?.type}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Username</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user1?.username}</h6>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
