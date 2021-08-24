import React from 'react'
import "./CustomButton.css"

function CustomButton({name, color, deleteMethod}) {
    const buttonStyle = {backgroundColor: color};
    return (
        <div className="custom-button-container">
            <button onClick={() =>deleteMethod} style={buttonStyle} className="custom-button">{name}</button>
        </div>
    )
}
export default CustomButton
