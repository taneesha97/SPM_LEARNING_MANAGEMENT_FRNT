import React, {useState} from 'react'
import './NavBarButtonComponent.css'
import {useHistory} from "react-router";
import SucessPopUp from "../PopupModel/SucessPopUp";
import AuthClass from "../../Validation/AuthClass";
function NavBarButtonComponent(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupName, setPopupName] = useState("");
    const [popupLocation, setPopupLocaion] = useState("");
    const history = useHistory();
    const profile = () => {
        history.push('/profile');
        props.setTrigger(!props.trigger)
    }

    const Dashboard = () => {
        history.push('/home');
        props.setTrigger(!props.trigger)
    }

    const ClassRoom = () => {
        history.push('/class');
        props.setTrigger(!props.trigger)
    }

    const Logout = () => {
        // setPopupName("logout");
        // setPopupLocaion("/login");
        // setButtonPopup(true);
        AuthClass.logout()
        history.push('/login');
        props.setTrigger(!props.trigger)

    }

    return (props.trigger) ? (

        // <div className="background-background">


            <div className="background">
                    {/*<SucessPopUp trigger={buttonPopup} setTrigger = {setButtonPopup} name1 = {popupName} name2 = {popupLocation}></SucessPopUp>*/}
                <div className="background1">
                    <div className="background1-info1" onClick={profile}>
                        <h2 className="background1-info1-main">My Profile</h2>
                        <h4 className="background1-info1-second">Edit your porfile here</h4>
                        <hr className="correction"/>
                    </div>
                    <div className="login-component-1">

                    </div>
                    <div className="background1-info1" onClick={Dashboard}>
                        <h2 className="background1-info1-main">Dashboard</h2>
                        <h4 className="background1-info1-second">Manage your classroom here</h4>
                        <hr className="correction"/>
                    </div>
                    <div className="background1-info1" onClick={ClassRoom}>
                        <h2 className="background1-info1-main">My ClassRooms</h2>
                        <h4 className="background1-info1-second">See all My ClassRooms</h4>
                        <hr className="correction"/>
                    </div>
                    <div className="background1-info1" onClick={Logout}>
                        <h2 className="background1-info1-main">Logout</h2>
                        <h4 className="background1-info1-second">See you again...!!</h4>
                    </div>
                </div>
                {/*<SucessPopUp trigger={buttonPopup} setTrigger = {setButtonPopup} name1 = {popupName} name2 = {popupLocation}></SucessPopUp>*/}
            </div>
        // </div>

    ) : <div></div>;
}

export default NavBarButtonComponent
