import React from 'react'
import "./TutorDashHeader.css"
import Tile1 from "./TileComponent/Tile1";
function TutorDashHeader() {
    return (
        <React.Fragment>
            <div className="tutor-header-component">
               <div className="container">
                   <div className="container-row">
                       <div className="tile-component">
                           <Tile1/>
                       </div>
                       <div className="tile-component">
                           <Tile1/>
                       </div>
                   </div>
                   <div className="container-row">
                       <div className="tile-component">
                           <Tile1/>
                       </div>
                       <div className="tile-component">
                           <Tile1/>
                       </div>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}
export default TutorDashHeader
