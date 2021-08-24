import React from 'react'
import "./CustomRow.css"
import CustomButton from "../CustomButtons/CustomButton";
function CustomRow({header, description, body, delete}) {
    return (
        <div className="custom-row-component">
            <div className="custom-row-component-second-column">
                <div className="custom-row-component-first-column">
                    <div className="custom-row-component-header">
                        {header}
                    </div>
                    <div className="custom-row-component-description">
                        {description}
                    </div>
                </div>
                <div className="custom-row-component-second-description">
                    {body}
                </div>
            </div>
            <div className="custom-row-component-three-column">
                {/*Custom Button Stack*/}
                <div className="custom-row-button-group">
                    <CustomButton name={"Delete"} color={"#FF5050"}/>
                    <CustomButton name={"Revoke"} color={"#E4BF5E"}/>
                    <CustomButton name={"Publish"} color={"#50C972"}/>
                </div>
            </div>
        </div>
    )
}

export default CustomRow
