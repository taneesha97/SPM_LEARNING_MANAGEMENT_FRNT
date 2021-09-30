import React from 'react'
import './style.css'
function AnnoucementDisplay(props) {
    return (
        <div className="announcementDisplay1">
                <h1 className="announcementDisplay1-font1">{props?.row?.header}</h1>
                <h2 className="announcementDisplay1-font2">{props?.row?.body}</h2>
        </div>
    )
}

export default AnnoucementDisplay
