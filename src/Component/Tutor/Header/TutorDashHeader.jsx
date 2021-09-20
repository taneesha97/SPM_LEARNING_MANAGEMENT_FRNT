import React from 'react'
import "./TutorDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile1 from "./TileComponent/Tile1";
function TutorDashHeader({array5}) {
    return (
        <React.Fragment>
            <div className="tutor-header-component">
                <div className="section-header">Overview Dashboard.</div>
                <div>
                    <div className="tutor-header-component-container">
                        {array5.map((item) => (
                            <Tile1 name={item.header} price={item.count} image={item.image}/>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TutorDashHeader
