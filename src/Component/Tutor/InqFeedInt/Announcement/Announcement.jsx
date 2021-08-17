import React from 'react'
import "./Announcement.css"
import RowComponent from "./RowComponent/RowComponent";
/**
 * This component accept a array as a prop, data should be displayed in a scrollable div in the body of the below component.
 * **/
function Announcement({array}) {
    return (
        <div className="announcement-container">
            <div className="announcement-header">
                <div className="section-header light">
                    Student Feedbacks
                </div>
                <div className="second-header">
                    Latest
                </div>
            </div>

            <div className="announcement-body">
                {array.map((item) => (
                   <RowComponent header={item.header} description={item.description}/>
                ))}
            </div>
        </div>
    )
}
export default Announcement
