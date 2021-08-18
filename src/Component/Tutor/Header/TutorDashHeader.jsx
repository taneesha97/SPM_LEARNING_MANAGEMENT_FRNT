import React from 'react'
import "./TutorDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile1 from "./TileComponent/Tile1";
function TutorDashHeader() {
    return (
        <React.Fragment>
            <div className="tutor-header-component">
                <div className="section-header">Overview Dashboard.</div>
                <div>
                    <div className="tutor-header-component-container">
                        <div className="tutor-header-tile1"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile2"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile3"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile4"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile5"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile6"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile7"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="tutor-header-tile8"><Tile1 name={"Student Count"} price={"$10"}/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TutorDashHeader
