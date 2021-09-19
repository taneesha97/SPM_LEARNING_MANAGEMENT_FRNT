import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./FileAttachInt.css"
import FileAttachmentTable from "./FileAttachmentTable/FileAttachmentTable";
import {LinearProgress} from "@material-ui/core";
import Select from 'react-select'
import {useSelector} from "react-redux";
import courses from "../../../Reducers/courses";
import {
    faBookOpen,
    faCommentAlt,
    faDollarSign,
    faPencilRuler,
    faSchool, faTimes, faUser,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";

function FileAttachInt({array4}) {

    console.log(array4);

    //Creating state for storing the meta information.
    const [course, setCourse] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null);

    //Progress Tracking State.
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState(0);
    const [downloadUri, setDownloadUri] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(null);

    //React Select - Sample Data for the React select.
    const options = [
        { value: 'chocolate1', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    async function getItems () {
        const response = await axios.get("http://localhost:8073/api/courses");
        const data = response.data;

        const options = data.map(item => ({
            "value" : item.id,
            "label" : item.title
        }))

        setSelectedOptions(options);
    }


    const [currentCountry, setCurrentCountry] = useState(null);
    const onchangeSelect = (item) => {
        setCurrentCountry(null);
        setRegion(item);
    };
    const [region, setRegion] = useState("");

    useEffect(()=> {
        getItems();
    }, [])


    //File attachment logic, saved the file in state.
    const onDrop = React.useCallback((selectedFile) => {
        let files = selectedFile.target.files;
        setFile(files);
        console.log(file);
        setSuccess(false);
        setProgress(0);
    })

    //File Uploading method.
    const uploadFiles = async (e) => {
        e.preventDefault();
        try {
            setSuccess(false);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", file);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("course", course);
            const API_URL = "http://localhost:8073/api/single/upload";
            const response = await axios.put(API_URL, formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted);
                },
            });
            setDownloadUri(response.data.fileDownloadUri);
            setSuccess(true);
            setLoading(false);

        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <div>
            <div className="file-component">
                <div className="input-form-container">
                    <form className="form" onSubmit={uploadFiles}>
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                            <div className="second-header">Course Form</div>
                        </div>

                        <label htmlFor="fname">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                               className="form-input"/>

                        <label htmlFor="lname">Price</label>
                        <input type="text" id="lname" name="lastname" placeholder="Price.." className="form-input"/>

                        <label htmlFor="lname">Description</label>
                        <input type="text" id="lname" name="lastname" placeholder="Description.."
                               className="form-input"/>

                        <label htmlFor="lname">Course</label>
                        <div className="form-input"><Select options={selectedOptions} menuPlacement="auto" menuPosition="fixed"/></div>


                        <label htmlFor="lname">Attach the File</label>
                        <input style={{height: "30px", fontSize: "10px", paddingBottom: "30px", color: "white", fontWeight: "bold"}} onChange={onDrop}  type="file" id="lname" name="lastname" placeholder="Number of Chapters.."
                               className="form-input"/>

                        <div className="course-button-group button-row">
                            <button className="add-button" type={"submit"}>Add</button>
                            <button className="light-button">Reset</button>
                        </div>
                    </form>
                        <div style={{marginLeft: "19px", marginRight: "10px", paddingBottom: "10px"}}>
                            <label style={{color: "white", fontWeight: "bold"}} htmlFor="lname">File Uploading
                                Progress </label>
                            <LinearProgress variant={"determinate"} value={progress}/>
                        </div>
                </div>
                <div className="file-table">
                    <div className="section-header dark-header"> Active Courses </div>
                    <div id="style-1" className="file-table-body-scrollable">
                        <FileAttachmentTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FileAttachInt
