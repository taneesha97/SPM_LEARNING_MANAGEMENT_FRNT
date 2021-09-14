import React from 'react'
import './styles.css'
import cancel from "./images/cancel (1).png";
import profilePic from "../../Pages/ProfilePage/images/profilePic.png";
function EmailUpdateComponent(props) {

    const crypto = require('crypto'),
        hash = crypto.getHashes();
    let password = crypto.createHash('sha1').update('value').digest('hex');
    console.log(password);
    async function compareIt(password){
       // const validPassword = await crypto.;
        return password;
    }
    console.log(compareIt("value"));
    return (props.trigger) ? (
        <div className="background-userUpdate-1">
            <div className="background-userUpdate">
                <div className="emailupdatecomponent-bio">
                    <div className="emailupdatecomponent-bio1-info1">
                        <a><img src= {cancel}  className="EmailCancelLogo-image1" onClick={ () => props.setTrigger(false)}/></a>
                        <img src= {profilePic}  className="profilePic-emailUpdate"/>

                        <div className="emailupdatecomponent-bio1-info2">
                            <h2 className="emailupdatecomponent-bio1-info2-main">User's new {props.name} Update</h2>
                            <h4 className="emailupdatecomponent-bio1-info2-second">
                                Update Your New {props.name} Here
                            </h4>
                        </div>



                        <div className="emailupdatecomponent-bio1-info1-second">
                            <form>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password"/>
                                </div>
                                <div className="button-container mt-2">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    ) : "";
}

export default EmailUpdateComponent
