import React from 'react'
import "./CustomRow.css"

function CustomRow() {
    return (
        <div className="custom-row-component">
            <div className="custom-row-component-first-column-back">
            <div className="custom-row-component-first-column">
                <div className="custom-row-component-header">English Literature</div>
                <div className="custom-row-component-description">Course Body</div>
            </div>
            </div>
            <div className="custom-row-component-second-column">
                <div className="custom-row-component-second-description">About the course.</div>
            </div>
            <div className="custom-row-component-three-column">
                {/*Custom Button Stack*/}
                <div className="custom-row-button-group">
                    <button>Custom Button</button>
                    <button>Custom Button</button>
                    <button>Custom Button</button>
                </div>

            </div>
        </div>
    )
}

export default CustomRow
