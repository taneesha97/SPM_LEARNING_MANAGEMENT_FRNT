import React from 'react'
import "./AdminDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile from "../Header/TileComponent/Tile";
function AdminDashHeader({array1}) {
    return (

        <React.Fragment>
            <div className="admin-header-component ">
                <div className="admin-section-header">Overview Dashboard.</div>
                <div>
                    <div className="admin-header-component-container">
                        {array1.map((item) => (
                            <Tile name={item.header} count={item.count} image={item.image}/>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdminDashHeader