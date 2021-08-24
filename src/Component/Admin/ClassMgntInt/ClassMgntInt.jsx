import React, {useState} from 'react';
import './ClassMgntInt.css'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import FileBase from 'react-file-base64';
import {useDispatch} from "react-redux";
import {addClass} from "../../../Action/Class";

function ClassMgntInt(){

    const [classData, setClassData] = useState({
        name: '',
        description: '',
        tutorName: '',
        image: ''
    });
    const dispatch = useDispatch();

    const formRefresh = () => {
        console.log('form referesh calling');
        setClassData({ ...classData, teacher: [] , className: "", description: ""});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(classData);
        const postData = {
            name : classData.name,
            description : classData.description,
            tutorName: classData.tutorName,
            image: classData.image
        }
        dispatch(addClass(postData));

        //check print success msg
    }

    return(
        <React.Fragment>
                <div className="class-component">
                    <div className="input-form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="class-component-header">
                                <div className="class-section-header">Class Form</div>
                                <div className="class-second-header">New class room add here</div>
                            </div>
                            <label htmlFor="name">Class Name</label>
                            <input
                                type="text"
                                id="name" name="classname"
                                placeholder="class name(eg:Grade 10)"
                                className="form-input"
                                value={classData.name}
                                onChange={(e) => setClassData({...classData, name: e.target.value})}
                                required
                            />

                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="description..."
                                className="form-input"
                                value={classData.description}
                                onChange={(e) => setClassData({...classData, description: e.target.value})}
                                required
                            />

                            <label htmlFor="lname">Teacher name</label>
                            <select
                                className="form-input"
                                aria-label="Default select example"
                                value={classData.teacher}
                                onChange={(e) => setClassData({...classData, tutorName: e.target.value})}
                                required
                            >
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label htmlFor="lname">Image</label>
                            <div className="mb-3" style={{marginLeft:20}}>
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({base64}) => setClassData({...classData, image: base64})}
                                    // required
                                />
                            </div>
                            <div className="course-button-group button-row">
                                <button className="add-button" type="submit">Submit</button>
                                <button className="reset-button" onClick={formRefresh}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default ClassMgntInt;