import React, {useState} from 'react'
import './ClassAnnouncement.css'
import CustomButton from "../../../Tutor/CourseMgntInt/CustomButtons/CustomButton";
import {useDispatch} from "react-redux";
import {addAnnouncement} from "../../../../Action/Announcement";
import Select from "react-select";
import {InputLabel, MenuItem} from "@material-ui/core";

function ClassAnnouncement(){

    const [data, setData] = useState({
        header:'',
        body:'',
        name: '',
    });

    const dispatch = useDispatch();

    //React Select
    const options = [
        { value: 'Grade 7', label: 'Grade 7' },
        { value: 'Grade 8', label: 'Grade 8' },
        { value: 'Grade 9', label: 'Grade 9' },
        { value: 'Grade 10', label: 'Grade 10' },
        { value: 'Grade 11', label: 'Grade 11' },
        { value: 'Grade 12', label: 'Grade 12' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SUBMIT: ',data);
        dispatch(addAnnouncement(data));
        console.log('DATA added')
    }



    return (
        <div className="class-announcement-container">
            <div className="class-announcement-header">
                <div className="class-announcement-section-header light">
                    Announcements
                </div>
                <div className="class-announcement-second-header">
                    Latest
                </div>
                <div className="class-announcement-body">
                    <div className="input-form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <label> Heading</label>
                            <div>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Announcement Heading Comes here..."
                                    className="form-input"
                                    value={data.header}
                                    onChange={(e) => setData({...data, header: e.target.value})}
                                    required
                                />
                            </div>
                            <label> Body</label>
                            <div>
                            <textarea
                                type="text"
                                id="fname" name="firstname"
                                placeholder="Announcement body comes here..."
                                className="form-area"
                                value={data.body}
                                onChange={(e) => setData({...data, body: e.target.value})}
                            />
                            </div>
                            <InputLabel id="label">Class name</InputLabel>
                            <div className="clz-input">
                                <Select
                                    aria-label="Default select example"
                                    value={data.name}
                                    onChange={(e) => setData({...data, name: e.target.value})}
                                    options={options}
                                >
                                </Select>
                                {/*<label htmlFor="lname">Teacher name</label>*/}
                                {/*<select*/}
                                {/*    className="form-input"*/}
                                {/*    aria-label="Default select example"*/}
                                {/*    value={data.name}*/}
                                {/*    onChange={(e) => setData({...data, name: e.target.value})}*/}
                                {/*>*/}
                                {/*    <option selected>Choose...</option>*/}
                                {/*    <option value="1">D.K.L.WEERSINGHE</option>*/}
                                {/*    <option value="2">T.K.L.CHANDRASENA</option>*/}
                                {/*    <option value="3">M.N.V.RATHNAYAKA</option>*/}
                                {/*    <option value="4">H.K.L.VEERSINGHE</option>*/}
                                {/*    <option value="5">K.N.V.PERERA</option>*/}
                                {/*</select>*/}
                            </div>
                            <div className="class-announcement-body-button-group">
                                <div className="class-announcement-button">
                                    <CustomButton name={"Discard"} color={"#FF5050"}/>
                                </div>
                                <div className="class-announcement-button">
                                    <CustomButton type="submit" name={"Send"} color={"#e4bf5e"}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassAnnouncement