import React from 'react'
import "./TutorDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile1 from "./TileComponent/Tile1";
function TutorDashHeader() {
    return (
        <React.Fragment>
            <div className="tutor-header-component ">
                <div className="section-header">Overview Dashboard. </div>
                <div >
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                    </div>
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile1 name={"Student Count"} price={"$10"}/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TutorDashHeader
