import React from 'react'
import './UserProfile.css'
import LoginLogo from "../../Component/Login/Images/LoginLogo.png";
function UserProfile() {
    return (<React.Fragment>
            <div>
                <div className="bluescreen">

                </div>
                <div className="bluescreen1">

                </div>
                <div className="userprofile">
                    <div className="userprofile1">
                        <img src= {LoginLogo}  className="login-image1"/>
                    </div>
                </div>
            </div>
    </React.Fragment>

    )
}

export default UserProfile
