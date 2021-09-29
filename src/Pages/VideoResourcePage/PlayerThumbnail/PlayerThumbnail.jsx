import React from 'react'
import "./PlayerThubnail.scss"
import {Link} from "react-router-dom";

function PlayerThumbnail({image, url}) {
    return (
        <div className="video-card-container">
            <div className="blog-card">
                <div className="blog-card-thumbnail">
                    <img className="blog-card-thumbnail-image" src={image}/>
                </div>
                <div className="blog-card_details">
                    <div className="blog-card_title">
                        Science Video
                    </div>
                    <div className="blog-card_description">
                        This is the description of the Video card.
                    </div>
                    <div className="blog-card-background">
                        <Link to={{
                            pathname: '/customvideoplayer',
                            url: {url: url}
                        }}>
                            <button className="blog-card_action">
                        <span style={{marginRight: "10px"}}>
                                Play
                        </span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayerThumbnail
