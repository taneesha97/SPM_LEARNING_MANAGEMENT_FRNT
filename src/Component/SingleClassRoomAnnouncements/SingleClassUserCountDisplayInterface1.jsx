import React from 'react'
import './style.css'
import navImg from "../NavigationBar/Images/Picture2.png";

function SingleClassUserCountDisplayInterface1(props) {
    return (
        <div className="SingleClassUsertDisplayInterface1">
            <div className="SingleClassUsertDisplayInterface2">
                <h1 className="announcementDisplay1-font1">{props.row.title1}</h1>
                <h2 className="announcementDisplay1-font2">{props.row.title2}</h2>

            </div>
            <div className ="singlclassview-logo1">
                <img src= {props.row.image} className ="singlclassview-logo"/>
            </div>

        </div>
    )
}

export default SingleClassUserCountDisplayInterface1
