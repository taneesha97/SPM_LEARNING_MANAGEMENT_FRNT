import React from 'react'
import './style.css'
import volume from "./images/volume.png";

function SingleClassAnnouncements() {
    return (
        <div className="singleclassviewbackgroundann">
            <div>
                <div>
                    <h1>Announcements</h1>
                </div>
                <div>
                    <img src= {volume}  className="Pic"/>
                </div>
            </div>
            <div>
                    <h1> announcements</h1>
            </div>

        </div>
    )
}

export default SingleClassAnnouncements
