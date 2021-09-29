import React from 'react'
import "./CustomButton.css"

function CustomButton({name, color, revokeMethod, type}) {
    const buttonStyle = {backgroundColor: color};
    return (
        <div className="custom-button-container">
            <button type={type}  style={buttonStyle} className="custom-button">{name}</button>
        </div>
    )
}
export default CustomButton
