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
                        <div className="userprofile1-info">
                            <h2 className="userprofile1-info-main">Taneesha</h2>
                            <div className="profitable-group">
                                <button className="userprofile-button1">Update User Name</button><br/>
                                <button className="userprofile-button1">Update My Email</button><br/>
                                <button className="userprofile-button1">Update Password</button><br/>
                                <button className="userprofile-button1">My Transactions</button><br/>
                                <button className="userprofile-button2">Delete My Account</button><br/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="userprofile-bio">
                    <div className="userprofile-bio1">

                    </div>
                </div>

            </div>
    </React.Fragment>

    )
}

export default UserProfile
