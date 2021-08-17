import React from 'react'
import './NavBarButtonComponent.css'
function NavBarButtonComponent() {
    return (
        <div>
            <div className="background1">
                <div className="background1-info1">
                    <h2 className="background1-info1-main">My Profile</h2>
                    <h4 className="background1-info1-second">Edit your porfile here</h4>
                    <hr className="correction"/>
                </div>

                <div className="background1-info1">
                    <h2 className="background1-info1-main">Dashboard</h2>
                    <h4 className="background1-info1-second">Manage your classroom here</h4>
                    <hr className="correction"/>
                </div>
                <div className="background1-info1">
                    <h2 className="background1-info1-main">My ClassRooms</h2>
                    <h4 className="background1-info1-second">See all My ClassRooms</h4>
                    <hr className="correction"/>
                </div>
                <div className="background1-info1">
                    <h2 className="background1-info1-main">Logout</h2>
                    <h4 className="background1-info1-second">See you again...!!</h4>
                </div>
            </div>

            <div className="background2">

            </div>
        </div>
    )
}

export default NavBarButtonComponent
