import React from 'react'
import './Registration.css'
import LoginLogo from "./Images/RegistrationImg.png";
import RegistrationComponent from "./RegistrationComponent";
function Registration() {
    return (

            <div className="Outer-Registration">
                <div className="Outer-Registration1">
                    <div className="Outer-Registration-Image">
                        <img src= {LoginLogo}  className="RegisterLogo-image1"/>
                    </div>
                    <div className="Outer-Registration-component">
                        <div className="register">
                            <div className="register1">
                                <RegistrationComponent/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row sub-footer2 mt-5'>Lerning Managemnt System v1.0 || All Rights Received.</div>

            </div>



    )
}
export default Registration
