import './collapseClassroom.css'

import React from 'react'
import {ProgressBar} from "react-bootstrap";

function BlueScreen6() {
    return (
        <div>
            <div className="bluescreencss6">
                <h2 className="title-blueScreen">Science</h2>
                <h2 className="title-blueScreen2">by John Deor</h2>
                <h2 className="title-blueScreen3">Completed</h2>
                <br/>
                <ProgressBar now={60} variant="warning" className="progressbar1"/>
            </div>
        </div>
    )
}

export default BlueScreen6
