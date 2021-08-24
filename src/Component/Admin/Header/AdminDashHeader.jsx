import React from 'react'
import "./AdminDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile from "./TileComponent/Tile";
import customerImage from "./Images/customer1.svg";

function AdminDashHeader() {
    return (

        <React.Fragment>
            <div className="admin-header-component ">
                <div className="admin-section-header">Overview Dashboard.</div>
                <div >
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col">
                        <Tile name={"Total Students"} count={"58.4K"}/>
                        {/*<img className="card-img" src={customerImage} alt="Card image cap"/>*/}
                        </div>
                        <div className="col"><Tile name={"Total Teacher"} count={"58.4K"}/></div>
                        <div className="col"><Tile name={"Total Income"} count={"58.4K"}/></div>
                    </div>
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col"><Tile name={"Total Announcements"} count={"58.4K"}/></div>
                        <div className="col"><Tile name={"Total Classrooms"} count={"58.4K"}/></div>
                        <div className="col"><Tile name={"Total Courses"} count={"58.4K"}/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdminDashHeader