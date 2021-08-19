import React from 'react';
import {Dropdown} from "bootstrap";
import './ClassMgntInt.css'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"

function ClassMgntInt(){
    return(
        <React.Fragment>
                <div className="class-component">
                    <div className="input-form-container">
                        <form className="form">
                            <div className="class-component-header">
                                <div className="section-header">Class Form</div>
                                <div className="second-header">New class room add here</div>
                            </div>
                            <label htmlFor="name">Class Name</label>
                            <input type="text" id="name" name="classname" placeholder="class name(eg:Grade 10)"
                                   className="form-input"/>

                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" name="description" placeholder="description..."
                                   className="form-input"/>

                            <label htmlFor="lname">Teacher name</label>
                            <select className="form-input" aria-label="Default select example">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label htmlFor="lname">Image</label>
                            <div className="mb-3" style={{marginLeft:20}}>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>
                            <div className="course-button-group button-row">
                                <button className="add-button">Add</button>
                                <button className="reset-button">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
        </React.Fragment>



    )
}

export default ClassMgntInt;