import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import classImage from './Images/MA-English-Literature1.svg'
import './ClassFileStyles.css'
const ClassTile = () => {

    return(
        <React.Fragment>
            <div className="class">
                <div className="card-deck">
                    <div className="card-body">
                        <h5 className="card-title">Class Name</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                        <img className="card-img-top" src={classImage} alt="Card image cap"/>
                </div>
            </div>
        </React.Fragment>
      )

}

export default ClassTile;