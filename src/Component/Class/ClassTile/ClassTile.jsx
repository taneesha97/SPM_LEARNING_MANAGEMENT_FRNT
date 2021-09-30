import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import './ClassFileStyles.css'
const ClassTile = (props) => {
    console.log('ROWS',props?.rows);

    const passData = () => {
        history.push('/singleclassview', { data: props?.rows })
    }

    return(
        <div className='class-tile-container' onClick={passData}>
            <div className='left-container'>
                <div className='main-heading'>{props?.rows?.name}</div>
                <div className='sub-heading'> {props?.rows?.description}</div>
            </div>
            <div className='right-container'>
                <img src={props?.rows?.image}/>
            </div>

        </div>
      )
}

export default ClassTile;