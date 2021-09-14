import React, {useEffect, useState} from 'react'
import './UserProfile.css'
import profilePic from "./images/profilePic.png";
import UserDetailsUpdateComponent from "../../Component/Profile/UserDetailsUpdateComponent";
import {fetchStudents, getUserByID} from "../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
function UserProfile() {
    const dispatch = useDispatch();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupName, setPopupName] = useState("");
    let userObject = localStorage.getItem("user")
    //console.log(user)
    let user = JSON.parse(userObject)
    console.log('retrievedObject: ', user);
    const updateUserName = () => {
        setButtonPopup(true);
        setPopupName("Username");
    }
    const updateEmail = () => {
        setButtonPopup(true);
        setPopupName("Email");
    }
    const updatePassword = () => {
        setButtonPopup(true);
        setPopupName("Password");
    }
    useEffect(() => {
        console.log('calling')
        //dispatch(getUserByID(122));
    },[])

    // const response = useSelector((state) => state.userDetails1.editDetail.data);
    // console.log(response);

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
                                                <h6 className="mb-0">{user.name}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user.email}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Age</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user.age}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Position</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user.type}</h6>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6 className="mb-0">Username</h6>
                                            </div>
                                            <div className="col">
                                                <h6 className="mb-0">{user.username}</h6>
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
                            <UserDetailsUpdateComponent trigger={buttonPopup} setTrigger = {setButtonPopup} name = {popupName}></UserDetailsUpdateComponent>
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
