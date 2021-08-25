import React from 'react'
import "./InqPopUpMenu.css"
function InqPopUpMenu({body, trigger, setTrigger, children}) {
    return (trigger) ? (
        <div className="inquiry-popup-menu-container">
            <div className="inquiry-popup-menu-header">
                Student Inquiries.
            </div>
            <div className="inquiry-popup-menu-body">
                {body}
            </div>
            <div className="inquiry-popup-menu-form">
                Form.
                <button className="close-btn" onClick={() => setTrigger(false)}>Close</button>
                {children}
            </div>

        </div>
    ) : "";
}

export default InqPopUpMenu;
