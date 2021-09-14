import React from 'react'
import './styles.css'
import cancel from "./images/cancel (1).png";
import profilePic from "../../Pages/ProfilePage/images/profilePic.png";
function EmailUpdateComponent(props) {




    return (props.trigger) ? (
        <div className="background-userUpdate-1">
                <div className="emailupdatecomponent-bio">
                    <div className="emailupdatecomponent-bio1-info1">
                        <a><img src= {cancel}  className="EmailCancelLogo-image1" onClick={ () => props.setTrigger(false)}/></a>
                        <img src= {profilePic}  className="profilePic-emailUpdate"/>
                        <div className="emailupdatecomponent-bio1-info2">
                                <h2 className="emailupdatecomponent-bio1-info2-main text-white">{props.name} Update</h2>
                                <div className="emailupdatecomponent-bio1-info2-main1 row mb-3 mt-2">
                                    <div className="col">
                                        <h6 className="emailupdatecomponent-bio1-info2-second">Current {props.name}: Salitha1</h6>
                                    </div>
                                </div>
                        </div>
                        <div className="emailupdatecomponent-bio1-info1-second">
                            <form>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputUsername">{props.name}</label>
                                    <input type="text" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp"/>
                                </div>
                                <div className="button-container mt-2">
                                    <button type="submit" className="btnpopup btn btn-primary mt-2">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
        </div>

    ) : "";
}

export default EmailUpdateComponent
