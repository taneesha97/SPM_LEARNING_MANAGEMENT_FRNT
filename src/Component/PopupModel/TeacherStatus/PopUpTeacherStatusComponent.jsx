import React from 'react'
import './styles.css'
import CustomAlert from "../../CustomAlert/CustomAlert";
function PopUpTeacherStatusComponent() {
    const popupView = () => {

    }

    const popupView1 = () => {

    }
    return (
        <div className="modal-confirm-4">
            <div className="modal-confirm">
            <div className="class-component-2">
                <div className="input-form-container">
                    <form className="form p-5">
                            <div className="success-main-2">
                                <h1 className="success-main-3 modal-title ">Teacher Status Update</h1>
                            </div>
                            <div className="pb-5">
                                <label htmlFor="lname">Teacher name</label>
                                <select
                                    className="form-input"
                                    aria-label="Default select example"
                                    // value={classData.teacher}
                                    // onChange={(e) => setClassData({...classData, tutorName: e.target.value})}
                                >
                                    <option className="w-25" selected>Choose...</option>
                                    <option className="w-25" value="valid">Approve</option>
                                    <option className="w-25" value="invalid">Reject</option>
                                    {/*<option value="3">Three</option>*/}
                                </select>
                            </div>


                        <div className="modal-footer-1">
                            <button className="btn btn-success btn-block w-100" data-dismiss="modal" onClick={popupView}>OK</button>
                        </div>
                        <br/>
                        <div className="modal-footer-1">
                            <button className="btn btn-danger btn-block w-100" data-dismiss="modal" onClick={popupView1}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
         </div>
        </div>
    )
}

export default PopUpTeacherStatusComponent
