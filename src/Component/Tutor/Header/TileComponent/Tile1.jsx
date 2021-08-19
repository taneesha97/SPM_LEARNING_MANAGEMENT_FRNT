import React from 'react'
import "./TileStyles.css"

function Tile1({name, price, image}) {
    return (
        <div className="tutor-header-card">
            <p className="tutor-card-header">{name}</p>
            <p className="tutor-card-price">{price}</p>
            <img src={image} alt="icon-name"/>
        </div>
    )
}
export default Tile1
