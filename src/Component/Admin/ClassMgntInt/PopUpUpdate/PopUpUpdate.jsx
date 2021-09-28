import React, {useEffect, useState} from 'react'
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {fetchTeachers, upDateUser} from "../../../../Action/Users";
import {useSelector} from "react-redux";

function PopUpUpdate(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tutorName, setTutorName] = useState('');
    const [teacherOptions, setTeacherOptions] = useState(null);
    const teacherResponse = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);
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

    async function getTeachersData() {
        const data = teacherResponse;
        console.log('Calling get tacher method 2', teacherResponse);
        const options = teacherResponse?.map((item) => (
            console.log('ITEM', item),
                {
                    "value" : item.id,
                    "label" : item.name
                }))
        setTeacherOptions(options);
        console.log('OPTIONS',options);
    }

    //get teacher data
    useEffect(() => {
        getTeachersData();
    },[teacherResponse])

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
                        <h1 className="success-main-3 modal-title ">Class Data Update</h1>
                    </div>
                    <div className="pb-2">
                    <label htmlFor="name">Class Name</label>
                    <input
                        type="text"
                        id="name" name="classname"
                        placeholder="class name(eg:Grade 10)"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    </div>
                    <div className="pb-2">
                        <InputLabel id="label">Teacher Name</InputLabel>
                            <Select
                                options={teacherOptions}
                                menuPlacement="auto"
                                menuPosition="fixed"
                                onChange={(e) => setTutorName(e.label)}>
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
