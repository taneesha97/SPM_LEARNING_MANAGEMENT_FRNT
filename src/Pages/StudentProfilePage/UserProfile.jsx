import React from 'react'
import './UserProfile.css'
import profilePic from "./images/profilePic.png";
function UserProfile() {
    return (<React.Fragment>
            <div>
                <div className="bluescreen">

                </div>
                <div className="bluescreen1">

                </div>
                <div className="userprofile">
                    <div className="userprofile1">
                        <img src= {profilePic}  className="profilePic"/>
                    </div>
                </div>
                <div className="userprofile1-info">
                    <h2 className="userprofile1-info-main">Taneesha</h2>
                </div>
            </div>
    </React.Fragment>

    )
}

export default UserProfile
