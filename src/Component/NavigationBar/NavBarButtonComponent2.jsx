import React from 'react'
import redcurve from "./Images/redcurve.png";
import greencurve from "./Images/greencurve.png";
import './NavBarButtonComponent.css'
function NavBarButtonComponent2() {
    return (
        <div className="background2">
            <br/>
            <div className="background1-info1">
                <h2 className="background1-info1-main">Payment Successed</h2>
                <img src= {redcurve}  className="recurve-image1"/>
                <h4 className="background1-info1-second">Your payment ID1008 is completed</h4>

                <hr className="correction"/>
            </div>

            <div className="background1-info1">
                <h2 className="background1-info1-main">New Materials added</h2>
                <img src= {greencurve}  className="recurve-image1"/>
                <h4 className="background1-info1-second">Science class grade 11 have add....</h4>
                <hr className="correction"/>
            </div>
            <div className="background1-info1">
                <h2 className="background1-info1-main">Recomended</h2>
                <img src= {redcurve}  className="recurve-image1"/>
                <h4 className="background1-info1-second">Maths Grade 11 by T.S. Chandrasena</h4>
                <hr className="correction"/>
            </div>
            <div className="background1-info1">
                <h2 className="background1-info1-main">Refund Request Resolved</h2>
                <img src= {greencurve}  className="recurve-image1"/>
                <h4 className="background1-info1-second">Your Refund Request RF1009 Has......</h4>
            </div>
        </div>
    )
}

export default NavBarButtonComponent2
