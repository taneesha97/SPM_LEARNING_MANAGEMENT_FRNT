import React, {useState} from 'react'
import './styles.css'
import cancel from "./images/cancel (1).png";
import profilePic from "../../Pages/ProfilePage/images/profilePic.png";
function PasswordUpdateComponent(props) {
    let userObject = localStorage.getItem("user")
    //console.log(user)
    let user = JSON.parse(userObject)
    console.log('retrievedObject: ', user);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);
    const [username, setUsername] = useState(user.username);

    const handleSubmit = () => {
        const user = {
            name,
            email,
            age,
            username
        }
        console.log(user)
    }


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

export default PasswordUpdateComponent
