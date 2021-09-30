import './collapseClassroom.css'

import React from 'react'
import {ProgressBar} from "react-bootstrap";

function BlueScreen7() {
    return (
        <div>
            <div className="bluescreencss6">
                <h2 className="title-blueScreen">Maths</h2>
                <h2 className="title-blueScreen2">by Smith Reon</h2>
                <h2 className="title-blueScreen3">Completed</h2>
                <br/>
                <ProgressBar now={30} variant="danger" className="progressbar1"/>
            </div>
        </div>
    )
}

export default BlueScreen7