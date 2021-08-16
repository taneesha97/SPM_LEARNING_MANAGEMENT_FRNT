import React from 'react'
import "./CourseMgntInt.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
function CourseMgntInt() {
    return (
        <React.Fragment>
            <div className="course-component">
                    <form className="input-form col">
                        <div className="mb-3">
                            <label  className="form-label">Example label</label>
                            <input type="text" className="form-control input-form" id="formGroupExampleInput"
                                   placeholder="Example input placeholder"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Another label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Another input placeholder"/>
                        </div>
                    </form>
                <div className="course-table">

                </div>
            </div>
        </React.Fragment>
    )
}
export default CourseMgntInt
