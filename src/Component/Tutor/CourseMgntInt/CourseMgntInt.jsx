import React from 'react'
import "./CourseMgntInt.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import CustomRow from "./CustomRow/CustomRow";
import RowComponent from "../InqFeedInt/Feedback/RowComponent/RowComponent";

function CourseMgntInt({array4}) {
    return (
        <React.Fragment>
            <div className="course-component">
                <div className="input-form-container">
                        <form className="form">
                            <div className="course-component-header">
                                <div className="section-header">Course Form</div>
                                <div className="second-header">Course Form</div>
                            </div>

                            <label htmlFor="fname">Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." className="form-input"/>

                            <label htmlFor="lname">Number of Chapters</label>
                            <input type="text" id="lname" name="lastname" placeholder="Number of Chapters.." className="form-input"/>

                            <label htmlFor="lname">Price</label>
                            <input type="text" id="lname" name="lastname" placeholder="Price.." className="form-input"/>

                            <label htmlFor="lname">Description</label>
                            <input type="text" id="lname" name="lastname" placeholder="Description.." className="form-input"/>

                            <div className="course-button-group button-row">
                                <button className="dark-button">Add</button>
                                <button className="light-button">Reset</button>
                            </div>
                        </form>
                </div>
                <div className="course-table">
                    <div className="section-header dark-header"> Active Courses</div>
                    <div id="style-1" className="course-table-body-scrollable">
                        {array4.map((item) => (
                            <CustomRow header={item.header} description={item.description} body={item.body}/>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CourseMgntInt
