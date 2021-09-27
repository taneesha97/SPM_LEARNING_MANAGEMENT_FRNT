import React from 'react'
import './style.css'

function SingleClassUserCountDisplayInterface1(props) {
    return (
        <div className="SingleClassUsertDisplayInterface1">
            <h1 className="announcementDisplay1-font1">{props.row.title1}</h1>
            <h2 className="announcementDisplay1-font2">{props.row.title2}</h2>
        </div>
    )
}

export default SingleClassUserCountDisplayInterface1
