import React from 'react'
import './style.css'
import volume from "./images/audio.png";
import AnnoucementDisplay from "./AnnoucementDisplay";

function SingleClassAnnouncements() {
    return (
        <div className="singleclassviewbackgroundann">
            <div className="header">
                <div>
                    <h1 style={{color: "white"}}>Announcements</h1>
                </div>
                <div >
                    <img src= {volume}  className="Pic"/>
                </div>
            </div>
            <div>
                    <h1> announcements</h1>
                    <AnnoucementDisplay/>
            </div>

        </div>
    )
}

export default SingleClassAnnouncements
