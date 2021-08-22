import React, {useState} from 'react';
import './ClassMgntInt.css'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import FileBase from 'react-file-base64';
import {useDispatch} from "react-redux";
import {addClass} from "../../../Action/Class";
function ClassMgntInt(){

    const [classData, setClassData] = useState({
        className: '',
        description: '',
        teacher: '',
        image: ''
    });
    const dispatch = useDispatch();

    const formRefresh = () => {
        console.log('form referesh calling');
        setClassData({ ...classData, teacher: [] , className: "", description: ""});
    }

    const formValidation = () => {
        console.log('calling validation')
        if(!classData.className){
            console.log('class name null');
            window.alert("class name missing")
        }else if(!classData.description){
            console.log('class des null');
            window.alert("class des missing")
        }else if(!classData.teacher){
            console.log('class teacher null');
            window.alert("class teacher missing")
        }else if(!classData.image){
            console.log('class image null');
            window.alert("class image missing")
        }else{
            return true;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValidation()){

            //dispatch(addClass(classData));
        }

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
                                value={classData.className}
                                onChange={(e) => setClassData({...classData, className: e.target.value})}
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
                            />

                            <label htmlFor="lname">Teacher name</label>
                            <select
                                className="form-input"
                                aria-label="Default select example"
                                value={classData.teacher}
                                onChange={(e) => setClassData({...classData, teacher: e.target.value})}
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