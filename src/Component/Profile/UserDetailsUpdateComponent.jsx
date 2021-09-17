import React, {useEffect, useState} from 'react'
import './styles.css'
import cancel from "./images/cancel (1).png";
import profilePic from "../../Pages/ProfilePage/images/profilePic.png";
import {addUsers, getUserByID, upDateUser} from "../../Action/Users";
import {useDispatch} from "react-redux";
function UserDetailsUpdateComponent(props) {
    let userObject = localStorage.getItem("user")
    //console.log(user)
    const [name, setName] = useState(props.name?.name);
    const [email, setEmail] = useState(props.name?.email);
    const [age, setAge] = useState(props.name?.age);
    const [username, setUsername] = useState(props.name?.username);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const user = {
            name,
            email,
            age,
            username
        }
        console.log(user)
        dispatch(upDateUser(props.name.id, user));

        props.setTrigger(false)
    }



    return (props.trigger) ? (
        <div className="background-userUpdate-1">
                <div className="emailupdatecomponent-bio">
                    <div className="emailupdatecomponent-bio1-info1">
                        <a><img src= {cancel}  className="EmailCancelLogo-image1" onClick={ () => props.setTrigger(false)}/></a>
                        <img src= {profilePic}  className="profilePic-emailUpdate"/>
                        <div className="emailupdatecomponent-bio1-info2">
                                <h2 className="emailupdatecomponent-bio1-info2-main text-white">{props.name1} Update</h2>
                                <div className="emailupdatecomponent-bio1-info2-main1 row mb-3 mt-2">
                                    <div className="col">
                                        <h6 className="emailupdatecomponent-bio1-info2-second1">Current Name: {props.name.name}</h6>
                                        <h6 className="emailupdatecomponent-bio1-info2-second1">Current Email: {props.name.email}</h6>
                                        <h6 className="emailupdatecomponent-bio1-info2-second1">Current Age: {props.name.age}</h6>
                                        <h6 className="emailupdatecomponent-bio1-info2-second1">Current Username: {props.name.username}</h6>
                                    </div>
                                </div>
                        </div>
                        <div className="emailupdatecomponent-bio1-info1-second">
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputUsername">Name</label>
                                    <input type="text" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp"
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputUsername">Email</label>
                                    <input type="text" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputUsername">Age</label>
                                    <input type="Number" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp"
                                           value={age}
                                           onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                            <div className="form-group mt-2">
                                <label htmlFor="exampleInputUsername">Username</label>
                                <input type="text" className="form-control" id="exampleInputUsername"
                                       aria-describedby="emailHelp"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                       disabled={true}
                                />
                            </div>
                                <div className="button-container mt-2">
                                    <button type="submit" className="btnpopup btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
                                </div>

                        </div>
                    </div>

                </div>
        </div>

    ) : "";
}

export default UserDetailsUpdateComponent
