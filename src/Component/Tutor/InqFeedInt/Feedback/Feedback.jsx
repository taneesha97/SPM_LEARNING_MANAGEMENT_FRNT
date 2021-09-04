import React from 'react'
import "./Feedback.css"
import RowComponent from "./RowComponent/RowComponent";
/**
 * This component accept a array as a prop, data should be displayed in a scrollable div in the body of the below component.
 * **/
function Feedback({array}) {
    return (
        <div className="feedback-container">
            <div className="feedback-header">
                <div className="section-header light">
                    Student Feedbacks
                </div>
                <div className="second-header">
                    Latest
                </div>
            </div>

            <div className="feedback-body">
                {array.map((item) => (
                   <RowComponent header={item.header} description={item.description}/>
                ))}
            </div>
        </div>
    )
}
export default Feedback
