import React from 'react'
import "./TileStyles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Tile({name, count, image}) {
    return (
        <div className="admin-header-card">
            <p className="admin-card-header">{name}</p>
            <p className="admin-card-price">{count}</p>
            <FontAwesomeIcon color="#3e3b9d" size="3x" icon={image} />
        </div>
    )
}
export default Tile
