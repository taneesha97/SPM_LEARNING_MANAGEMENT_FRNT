import React from 'react'
import "./InquiryCustomRow.css"
function InquiryCustomRow({header, description}) {
    //Logic to open the popup menu.
    const popUpMenuTrigger = () => {
        console.log("Clicked on the Pop up trigger");

    }

    return (
        <div className="inquiry-custom-row-container" onClick={() => popUpMenuTrigger()}>
            <div className="inquiry-custom-row-flex">
                <div>
                    <div className="inquiry-custom-row-header">{header}</div>
                    <div className="inquiry-custom-row-description">{description}</div>
                </div>
                <div className="inquiry-custom-row-posted-time">
                    <div className="custom-row-rounded-circle"/>
                </div>
            </div>
        </div>
    )
}

export default InquiryCustomRow
