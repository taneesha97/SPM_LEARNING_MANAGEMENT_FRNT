import React from 'react'
import '../NavigationBar/Navbar.css'
import navImg from "../NavigationBar/Images/Picture2.png";
import navImg1 from "../NavigationBar/Images/notification.png";

function LoggedUserComponent() {
    return (
        <div className= "loggedUserComponent">
            <div className="loggedUserNameTile">
                <div className="title-component-1">
                    <h1 className="title-component-main-1">value1</h1>
                    <h2 className="title-component-sub-1">value2</h2>
                </div>
            </div>
            <div className="loggedUserImage">
                <img src= {navImg} className ="navbar-logo"/>
            </div>
            <div className="loggedUserNotification">
                <img src= {navImg1} className ="navbar-logo"/>
            </div>
        </div>
    )
}

export default LoggedUserComponent
