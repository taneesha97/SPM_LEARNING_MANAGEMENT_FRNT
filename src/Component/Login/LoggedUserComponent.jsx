import React from 'react'
import '../NavigationBar/Navbar.css'

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
                <h1 className= "title">loggedUserNametile</h1>
            </div>
            <div className="loggedUserNotification">
                {/*<h1 className= "title">loggedUserNametile</h1>*/}
            </div>
        </div>
    )
}

export default LoggedUserComponent
