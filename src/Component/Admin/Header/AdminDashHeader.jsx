import React from 'react'
import "./AdminDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile from "./TileComponent/Tile";

function AdminDashHeader() {
    return (
        <React.Fragment>
            <div className="admin-header-component ">
                <div className="admin-section-header">Overview Dashboard. </div>
                <div >
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                    </div>
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                        <div className="col"><Tile name={"Student Count"} price={"$10"}/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdminDashHeader