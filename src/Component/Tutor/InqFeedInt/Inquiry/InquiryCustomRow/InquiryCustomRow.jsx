import React from 'react'
import "./InquiryCustomRow.css"
function InquiryCustomRow({header, description}) {
    return (
        <div className="inquiry-custom-row-container">
            <div className="inquiry-custom-row-flex">
                <div>
                    <div className="inquiry-custom-row-header">{header}</div>
                    <div className="inquiry-custom-row-description">{description}</div>
                </div>
                <div className="custom-row-posted-time">
                    <div className="rounded-circle"/>
                </div>
            </div>
        </div>
    )
}

export default InquiryCustomRow
