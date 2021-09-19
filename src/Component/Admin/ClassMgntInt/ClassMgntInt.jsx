import React, {useState} from 'react';
import './ClassMgntInt.css'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from "react-redux";
import {addClass, getClasses} from "../../../Action/Class";
import CustomAlert from '../../CustomAlert/CustomAlert'
import {Grid} from "@material-ui/core";
import Select from "react-select";
function ClassMgntInt() {

    const [image, setImage] = useState("");
    const [classData, setClassData] = useState({
        name: '',
        description: '',
        tutorName: '',
    });
    const dispatch = useDispatch();

    //React Select
    const options = [
        { value: 'D.K.L.WEERSINGHE', label: 'D.K.L.WEERSINGHE' },
        { value: 'T.K.L.CHANDRASENA', label: 'T.K.L.CHANDRASENA' },
        { value: 'M.N.V.RATHNAYAKA', label: 'M.N.V.RATHNAYAKA' },
        { value: 'H.K.L.VEERSINGHE', label: 'H.K.L.VEERSINGHE' },
        { value: 'K.N.V.PERERA', label: 'K.N.V.PERERA' },
        { value: 'D.O.K.KUMARA', label: 'D.O.K.KUMARA' },
    ];

    const formRefresh = () => {
        console.log('form referesh calling');
        setClassData({...classData, name: '', teacher: [], description: ""});
    }

    const uploadedImage = (e) => {
        let file = e.target.files[0];
        console.log(file.name)
        setImage(file.name)//
    }


    //Error message
    const errorMessage = useSelector((state: any) => state.classes.classDetails.error);


    const [errorDisplay, setErrorDisplay] = useState("");

    React.useEffect(() => {
        setErrorDisplay(errorMessage);
        setTimeout(() => setErrorDisplay(""), 5000);
    }, [errorMessage]);

    //Success message after inserting leaves
    const successMessage = useSelector((state: any) => state.classes.classDetails.success);

    const [successMessageDisplay, setSuccessMessageDisplay] = useState(successMessage);
    const [errorMessageDisplay, setErrorMessageDisplay] = useState(null);

    React.useEffect(() => {
        setSuccessMessageDisplay(successMessage);
        setTimeout(() => setSuccessMessageDisplay(""), 3000);
    }, [successMessage]);

    const validation = () => {
        if (classData.tutorName === null) {
            setErrorMessageDisplay("Please select a Tutor");
            return false;
        }else{
            return true;
        }
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            setErrorMessageDisplay(null);
            console.log(classData);
            if (validation()) {
                dispatch(addClass(classData));
            }
                setTimeout(() => dispatch(getClasses()), 1000);

        }

        return (
            <React.Fragment>
                <div className="class-component">
                    < div className="input-form-container">
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

                            {/*<label htmlFor="lname">Teacher name</label>*/}
                            {/*<select*/}
                            {/*    className="form-input"*/}
                            {/*    aria-label="Default select example"*/}
                            {/*    value={classData.teacher}*/}
                            {/*    required onChange={(e) => setClassData({...classData, tutorName: e.target.value})}*/}
                            {/*    required*/}
                            {/*    options={options}*/}
                            {/*>*/}
                            {/*    /!*<option selected>Choose...</option>*!/*/}
                            {/*    /!*<option value="1">D.K.L.WEERSINGHE</option>*!/*/}
                            {/*    /!*<option value="2">T.K.L.CHANDRASENA</option>*!/*/}
                            {/*    /!*<option value="3">M.N.V.RATHNAYAKA</option>*!/*/}
                            {/*    /!*<option value="4">H.K.L.VEERSINGHE</option>*!/*/}
                            {/*    /!*<option value="5">K.N.V.PERERA</option>*!/*/}
                            {/*</select>*/}

                            <label htmlFor="lname">Teacher name</label>
                            <div className="class-form-teacher-input"><Select options={options} menuPlacement="auto" menuPosition="fixed"/></div>


                            {/*<label htmlFor="lname">Image</label>*/}
                            {/*<div className="mb-3" style={{marginLeft:20}}>*/}
                            {/*    /!*<FileBase*!/*/}
                            {/*    /!*    type="file"*!/*/}
                            {/*    /!*    multiple={false}*!/*/}
                            {/*    /!*    onDone={({base64}) => setClassData({...classData, image: base64})}*!/*/}
                            {/*    /!*    // required*!/*/}
                            {/*    <input type="file" id="avatar"  accept="image/png, image/jpeg"*/}
                            {/*           onChange={uploadedImage} />*/}
                            {/*</div>*/}
                            {/*<label htmlFor="lname">Image</label>*/}
                            {/*<div className="mb-3" style={{marginLeft:20}}>*/}
                            {/*    <FileBase*/}
                            {/*        type="file"*/}
                            {/*        multiple={false}*/}
                            {/*        onDone={({base64}) => setClassData({...classData, image: base64})}*/}
                            {/*        // required*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <div className="msg">
                            <Grid item direction="column" md={6}>
                                {errorDisplay ? (
                                    <CustomAlert displayText={errorDisplay} severity="warning"/>
                                ) : null}
                                {successMessageDisplay ? (
                                    <CustomAlert
                                        displayText={successMessageDisplay}
                                        severity="success"
                                    />
                                ) : null}
                            </Grid>
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
