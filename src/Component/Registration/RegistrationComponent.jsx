import React from 'react'
import './Registration.css'

function RegistrationComponent() {
    return (
        <div>
            <form>
                <div className="registration-info4">
                    <h2 className="registration-info4-main">Registration</h2>
                    <h4 className="registration-info4-second">Register to get access to premium features and discounts</h4>
                </div>

                <div className="registration-body">
                    <div>
                        <lable className="input-wrapper">Name</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Name..."
                               type="text"
                        />
                        <br/>
                    </div>
                    <div>
                        <lable className="input-wrapper">Email</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Email..."
                               type="password"
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">User Name</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Username..."
                               type="password"
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">Password</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Password..."
                               type="password"
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">Re-Enter Password</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Password..."
                               type="password"
                        />
                    </div><br/>

                    <div className="registration-button-group">
                        <button className="registration-button" type="submit">Register</button><br/>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default RegistrationComponent
