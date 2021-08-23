import React from 'react'
import './styles.css'
import cancel from "./images/cancel (1).png";
import profilePic from "../../Pages/StudentProfilePage/images/profilePic.png";
function EmailUpdateComponent(props) {
    return (props.trigger) ? (
        <div>
            <div className="emailupdatecomponent-bio">
                    <div className="emailupdatecomponent-bio1-info1">
                        <img src= {cancel}  className="EmailCancelLogo-image1"/>
                        <img src= {profilePic}  className="profilePic-emailUpdate"/>


                        <div className="emailupdatecomponent-bio1-info2">
                            <h2 className="emailupdatecomponent-bio1-info2-main">User Email Update</h2>
                            <h4 className="emailupdatecomponent-bio1-info2-second">
                                Update Your New Email Here
                                </h4>
                        </div>



                        <div className="emailupdatecomponent-bio1-info1-second">
                            <div>
                                {/*<lable className="input-wrapper-update">Email</lable><br/>*/}
                                <input className="input-field-updateemail"
                                       placeholder="Enter Email..."
                                       type="email"
                                       // onChange = {(e) =>{
                                       //     setEmail(e.target.value);
                                       // }}

                                />
                                <button type="submit" className="profileemailupdatebtn"> Update </button>
                            </div>

                            </div>
                    </div>

            </div>
        </div>
    ) : "";
}

export default EmailUpdateComponent
