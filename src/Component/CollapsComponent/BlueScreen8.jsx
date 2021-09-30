import './collapseClassroom.css'

import React from 'react'
import {ProgressBar} from "react-bootstrap";

function BlueScreen8() {
    return (
        <div>
            <div className="bluescreencss6">
                <h2 className="title-blueScreen">Music</h2>
                <h2 className="title-blueScreen2">by M.Gunarathna</h2>
                <h2 className="title-blueScreen3">Completed</h2>
                <br/>
                <ProgressBar now={90} variant="info" className="progressbar1"/>
            </div>
        </div>
    )
}

export default BlueScreen8