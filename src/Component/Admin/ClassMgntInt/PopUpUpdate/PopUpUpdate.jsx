import React, {useEffect, useState} from 'react'
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {fetchTeachers, upDateUser} from "../../../../Action/Users";

function PopUpUpdate(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tutorName, setTutorName] = useState('');


    function popupView() {
        const classData = {
            name,
            description,
            tutorName,
            //image
        }
        // dispatch(upDateUser(props.name1, newUser))
        // setTimeout(function(){
        //     dispatch(fetchTeachers());
        //     props.setTrigger(false)
        // }, 100);
        props.setTrigger(false);
    }

    function popupView1() {
        props.setTrigger(false);
    }

    return (props.trigger) ? (
    // return(
    <div className="modal-confirm-4">
        <div className="class-component-2">
            <div className="input-form-container">
                <div className="form p-5">
                    <div className="success-main-2">
                        <h1 className="success-main-3 modal-title ">Teacher Status Update</h1>
                    </div>
                    <div className="pb-2">
                    <label htmlFor="name">Class Name</label>
                    <input
                        type="text"
                        id="name" name="classname"
                        placeholder="class name(eg:Grade 10)"
                        className="form-input"
                        // value={name}
                        //onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </div>
                    <div className="pb-2">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="description..."
                        className="form-input"
                        //value={description}
                        //onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    </div>
                    <div className="pb-2">
                        <InputLabel id="label">Teacher Name</InputLabel>
                        <Select
                            className="form-input"
                            aria-label="Default select example"
                            //value={status}
                            //onChange={ (e) => SelectedStatus(e.target.value)}
                        >
                            <MenuItem value="valid">Approve</MenuItem>
                            <MenuItem value="invalid">Reject</MenuItem>
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
// )
}

export default PopUpUpdate;
