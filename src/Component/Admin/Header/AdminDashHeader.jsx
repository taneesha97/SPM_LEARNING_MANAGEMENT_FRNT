import React from 'react'
import "./AdminDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile1 from "../../Tutor/Header/TileComponent/Tile1";
function AdminDashHeader({array1}) {
    return (

        <React.Fragment>
            <div className="admin-header-component ">
                <div className="admin-section-header">Overview Dashboard.</div>
                <div>
                    <div className="admin-header-component-container">
                        {array1.map((item) => (
                            <Tile1 name={item.header} price={item.count} image={item.image}/>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdminDashHeader