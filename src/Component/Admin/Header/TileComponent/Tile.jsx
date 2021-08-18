import React from 'react'
import "./TileStyles.css"

function Tile({name, price}) {
    return (
        <div className="admin-header-card">
            <p className="admin-card-header"> {name}</p>
            <p className="admin-card-price"> {price} </p>
            <img src="" alt="icon-name"/>
        </div>
    )
}
export default Tile;
