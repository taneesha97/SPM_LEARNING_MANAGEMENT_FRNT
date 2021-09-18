import React, {useState} from 'react'
import './Navbar.css'
import navImg from "./Images/Picture2.png";
import navImg1 from "./Images/notification.png";
import NavBarButtonComponent from "./NavBarButtonComponent";
import NavBarButtonComponent2 from "./NavBarButtonComponent2";

function LoggedUserComponent() {
    const [selected , setSelected] = useState(false)
    const [selected1 , setSelected1] = useState(false)
    //const [buttonPopup, setButtonPopup] = useState(false);

    let userObject = localStorage.getItem("username")

    // let user = JSON.parse(userObject)
    // // console.log('retrievedObject: ', user);
    // console.log(user)

    const logNav = () => {
        setSelected(!selected)
    }
    const logNav2 = () => {
        setSelected1(!selected1)
    }
    return (
        <div className= "loggedUserComponent">
            <div className="loggedUserNameTile">
                <div className="title-component-1">
                    <h1 className="title-component-main-1">{userObject}</h1>
                    <h2 className="title-component-sub-1">s@gmail.com</h2>
                </div>
            </div>
            {/*<div className="loggedUserImage + (selected ? "expand" : "")" onClick={logNav}>*/}
            <div className="loggedUserImage" onClick={logNav}>
                <img src= {navImg} className ="navbar-logo"/>
            </div>

            <div className="loggedUserNotification" onClick={logNav2}>
                <img src= {navImg1} className ="navbar-logo"/>
            </div>
            <NavBarButtonComponent trigger={selected} setTrigger = {setSelected}/>
            <NavBarButtonComponent2 trigger={selected1} setTrigger = {setSelected1}/>
        </div>
    )
}

export default LoggedUserComponent
