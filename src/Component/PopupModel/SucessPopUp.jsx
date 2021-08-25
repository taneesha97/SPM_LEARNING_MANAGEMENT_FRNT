import React from 'react'
import './sucesspopupStyle.css'
// import cancel from "./images/cancel (1).png";
// import profilePic from "../../Pages/StudentProfilePage/images/profilePic.png";
function SucessPopUp(props) {
    // return (props.trigger) ? (
    return (
        // <div className="background-sucesspopup">
        //     <div className="background-sucesspopup">
        //         <div className="emailupdatecomponent-bio">
        //             <div className="emailupdatecomponent-bio1-info1">
        //                 <a><img src= {cancel}  className="EmailCancelLogo-image1" onClick={ () => props.setTrigger(false)}/></a>
        //                 <img src= {profilePic}  className="profilePic-emailUpdate"/>
        //
        //                 <div className="emailupdatecomponent-bio1-info2">
        //                     <h2 className="emailupdatecomponent-bio1-info2-main">User's new {props.name} Update</h2>
        //                     <h4 className="emailupdatecomponent-bio1-info2-second">
        //                         Update Your New {props.name} Here
        //                     </h4>
        //                 </div>
        //
        //
        //
        //                 <div className="emailupdatecomponent-bio1-info1-second">
        //                     <div>
        //                         <input className="input-field-updateemail"
        //                                placeholder="Enter....."
        //                                type="text"
        //                         />
        //                         <button type="submit" className="profileemailupdatebtn"> Update </button>
        //                     </div>
        //
        //                 </div>
        //             </div>
        //
        //         </div>
        //     </div>
        // </div>
        <div>
            {/*<div className="text-center">*/}
            {/*    <a href="#myModal" className="trigger-btn" data-toggle="modal">Click to Open Confirm Modal</a>*/}
            {/*</div>*/}
            <div className="modal-confirm">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="icon-box">

                                {/*<i className="material-icons">&#xE876;</i>*/}
                                <i className="icon-ok"></i>
                            </div>
                            <h4 className="modal-title w-100">Awesome!</h4>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">Your booking has been confirmed. Check your email for
                                detials.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
//: "";
}

export default SucessPopUp
