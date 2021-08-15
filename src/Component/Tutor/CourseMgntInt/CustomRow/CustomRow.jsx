import React from 'react'
import "./CustomRow.css"

function CustomRow() {
    return (
        <div className="custom-row-component">
            <div className="custom-row-component-first-column">
                <div className="custom-row-component-header">
                    English Literature
                </div>
                <div className="custom-row-component-description">
                    Literature broadly is any collection
                    of written work,
                    but it is also used more narrowly
                    for writings specifically
                    considered to be an art form
                </div>
            </div>
            <div className="custom-row-component-second-column">
                <div className="custom-row-component-second-description">
                    dogs that like to sleep all day
                    dogs that just don't mind foxes jumping over them
                    dogs that have worked hard all and are now resting.
                </div>
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
