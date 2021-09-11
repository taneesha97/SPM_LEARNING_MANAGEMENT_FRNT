import React, {useState} from 'react'
import './Navbar.css'
import navImg from "./Images/Picture2.png";
import navImg1 from "./Images/notification.png";

function LoggedUserComponent() {
    const [selected , setSelected] = useState(false)
    const logNav = () => {
        setSelected(!selected)
    }
    return (
        <div className= "loggedUserComponent">
            <div className="loggedUserNameTile">
                <div className="title-component-1">
                    <h1 className="title-component-main-1">User1</h1>
                    <h2 className="title-component-sub-1">s@gmail.com</h2>
                </div>
            </div>
            {/*<div className="loggedUserImage + (selected ? "expand" : "")" onClick={logNav}>*/}
            <div className="loggedUserImage" onClick={logNav}>
                <img src= {navImg} className ="navbar-logo"/>
                <div>

                </div>
                {/*<Dropdown>*/}
                {/*    <Dropdown.Toggle variant="success" id="dropdown-basic">*/}
                {/*        Dropdown Button*/}
                {/*    </Dropdown.Toggle>*/}

                {/*    <Dropdown.Menu>*/}
                {/*        /!*<Dropdown.Item href="#/action-1">Action</Dropdown.Item>*!/*/}
                {/*        /!*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*!/*/}
                {/*        /!*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*!/*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}
            </div>
            <div className="loggedUserNotification">
                <img src= {navImg1} className ="navbar-logo"/>
            </div>
        </div>
    )
}

export default LoggedUserComponent
