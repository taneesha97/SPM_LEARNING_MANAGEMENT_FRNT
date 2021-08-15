import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const ClassTile = () => {

    return(
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Class Name</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
      )

}

export default ClassTile;