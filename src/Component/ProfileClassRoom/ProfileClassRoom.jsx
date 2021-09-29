import React from 'react'
import './ProfileClassRoom.css'
import CollapsComponent from "../CollapsComponent/CollapsComponent";
function ProfileClassRoom() {
    return (
        <div>
            <div className="bluescreen3">
                    <h2 className="title-profileClassRoom">My Class Rooms</h2>
            </div>
            <div className="bluescreen4">
                <div className="bluescreen5">
                    <div className="collapseList">
                        <CollapsComponent/>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default ProfileClassRoom