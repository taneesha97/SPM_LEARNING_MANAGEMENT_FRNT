import React from 'react'

function RowComponent({header, description}) {
    return (
        <div className="custom-row-container">
            <div className="custom-row-header">{header}</div>
            <div className="custom-row-description">{description}</div>
        </div>
    )
}

export default RowComponent
