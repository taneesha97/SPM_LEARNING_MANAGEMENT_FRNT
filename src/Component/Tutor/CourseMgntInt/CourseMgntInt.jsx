import React from 'react'
import "./CourseMgntInt.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile1 from "../Header/TileComponent/Tile1";
import CustomRow from "./CustomRow/CustomRow";
function CourseMgntInt() {
    return (
        <React.Fragment>
            <div className="course-component">
                <div className="input-form-container">
                <form className="input-form">
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                        </div>

                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <span>Course Name: </span>
                            </div>
                        </div>
                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <input type="text" className="input-form"/>
                            </div>
                        </div>

                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <span>Number of Chapters: </span>
                            </div>
                        </div>
                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <input type="text" className="input-form"/>
                            </div>
                        </div>

                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <span>Price: </span>
                            </div>
                        </div>
                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <input type="text" className="input-form"/>
                            </div>
                        </div>

                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <span>Description: </span>
                            </div>
                        </div>
                        <div className="row container-row row-cols-auto">
                            <div className="col">
                                <input type="text" className="input-form"/>
                            </div>
                        </div>

                        <div className="course-button-group button-row">
                            <button className="dark-button">Add</button>
                            <button className="light-button">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="course-table">
                    <div className="section-header dark-header"> Active Courses </div>
                    <div>
                        {/*Insert a custom video*/}
                        <CustomRow/>
                        <CustomRow/>
                        <CustomRow/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CourseMgntInt
