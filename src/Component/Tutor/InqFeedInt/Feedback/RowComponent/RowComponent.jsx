import React from 'react'
import "./RowComponent.scss"

function RowComponent({header, description}) {
    return (
        <div className="custom-row-container">
            <div className="custom-row-flex">
                <div>
                    <div className="custom-row-header">{header}</div>
                    <div className="custom-row-description">{description}</div>
                </div>
                <div className="custom-row-posted-time">34 mins ago</div>
            </div>
            <div className="custom-row-container-line"/>
        </div>
    )
}

export default RowComponent
