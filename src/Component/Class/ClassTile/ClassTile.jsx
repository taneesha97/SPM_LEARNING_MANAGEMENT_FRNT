import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Classimage from './Images/Classimage.svg'
import './ClassFileStyles.css'
const ClassTile = (rows) => {

    return(
        <div className='class-tile-container'>
            <div className='left-container'>
                <div className='main-heading'>{rows.name}</div>
                <div className='sub-heading'> {rows.description}</div>
            </div>
            <div className='right-container'>
                <img src={rows.image}/>
            </div>

        </div>
      )
}

export default ClassTile;