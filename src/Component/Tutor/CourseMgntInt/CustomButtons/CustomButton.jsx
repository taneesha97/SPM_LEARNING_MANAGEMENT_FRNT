import React from 'react'
import "./CustomButton.css"

function CustomButton({name, color, revokeMethod, type}) {
    const buttonStyle = {backgroundColor: color};

    /**
     * Conditionally show two types of buttons, depends on the props.
     *
     * **/

    return (
        <div className="custom-button-container">
            {type?
                <button type={type}  style={buttonStyle} className="custom-button">{name}</button>
                :
                <button onClick={revokeMethod}  style={buttonStyle} className="custom-button">{name}</button>
            }
        </div>
    )
}
export default CustomButton
