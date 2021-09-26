import React, {useState} from 'react'
import './styles.css'
import CustomAlert from "../../CustomAlert/CustomAlert";
import {InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {deleteUsers, fetchTeachers, upDateUser} from "../../../Action/Users";
function PopUpTeacherStatusComponent(props) {


    console.log('dddd', props.name2)

    const [status, setSelectedStatus] = useState(props.name2);
    const dispatch = useDispatch();

    const popupView = () => {
        const newUser = {
            status
        }
        console.log(props.name1, newUser)
        console.log(props.name2)
        dispatch(upDateUser(props.name1, newUser))
        setTimeout(function(){
            dispatch(fetchTeachers());
            props.setTrigger(false)
        }, 100);

    }

    const popupView1 = () => {
        console.log('coll')
        props.setTrigger(false)
    }

    const SelectedStatus = (value) =>{
        setSelectedStatus(value)
        console.log(value)
    }

    return (props.trigger) ? (
        <div className="modal-confirm-4">
            <div className="class-component-2">
                <div className="input-form-container">
                    <div className="form p-5">
                            <div className="success-main-2">
                                <h1 className="success-main-3 modal-title ">Teacher Status Update</h1>
                            </div>
                            <div className="pb-5">
                                <InputLabel id="label">Teacher Status</InputLabel>
                                <Select
                                    className="form-input"
                                    aria-label="Default select example"
                                    value={status}
                                    onChange={ (e) => SelectedStatus(e.target.value)}
                                    >
                                    <MenuItem value="valid">Approve</MenuItem>
                                    <MenuItem  value="invalid">Reject</MenuItem>
                                    <MenuItem value="pending">Pending</MenuItem>
                                </Select>
                            </div>


                            <div className="modal-footer-1">
                                <button className="btn btn-success btn-block w-100" onClick={popupView}>OK</button>
                            </div>
                            <br/>
                            <div className="modal-footer-1">
                                <button className="btn btn-danger btn-block w-100" onClick={popupView1}>Cancel</button>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    ) : <div></div>;
}

export default PopUpTeacherStatusComponent
