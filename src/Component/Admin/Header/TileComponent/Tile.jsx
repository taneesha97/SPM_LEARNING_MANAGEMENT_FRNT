import React from 'react'
import "./TileStyles.css"

function Tile({name, count}) {
    return (
        <div className="admin-header-card">
            <p className="admin-card-header"> {name}</p>
            <p className="admin-card-price"> {count} </p>
            <img src="" alt="icon-name"/>
        </div>
    )
}
export default Tile;
