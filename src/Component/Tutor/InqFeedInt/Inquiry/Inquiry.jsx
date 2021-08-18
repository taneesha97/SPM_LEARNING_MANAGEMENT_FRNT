import React from 'react'
import "./Inquiry.css"
import RowComponent from "../Feedback/RowComponent/RowComponent";
import InquiryCustomRow from "./InquiryCustomRow/InquiryCustomRow";
function Inquiry({array}) {
    return (
        <div className="inquiry-container">
            <div className="inquiry-header">
                <div className="section-header light">
                    Student Feedbacks
                </div>
                <div className="second-header">
                    Latest
                </div>
            </div>
            <div className="inquiry-body">
                {array.map((item) => (
                    <InquiryCustomRow header={item.header} description={item.description}/>
                ))}
            </div>
        </div>
    )
}

export default Inquiry
