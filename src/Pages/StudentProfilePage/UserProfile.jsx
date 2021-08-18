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
                        <div className="userprofile-bio1-info1">
                            <h2 className="userprofile-bio1-info1-main">Bio</h2><br/>
                            <h4 className="userprofile-bio1-info1-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur nec dignissim sem. Donec sed justo rutrum, vehicula elit a, pulvinar sem. Proin convallis,
                                orci vel blandit luctus, massa lectus blandit neque,
                                sit amet pharetra libero lacus et arcu. Donec placerat lacinia nunc vel faucibus.</h4>
                        </div>

                    </div>
                </div>

            </div>
    </React.Fragment>

    )
}

export default UserProfile