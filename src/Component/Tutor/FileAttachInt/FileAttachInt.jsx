import React, {useState} from 'react'
import "./FileAttachInt.css"
import FileAttachmentTable from "./FileAttachmentTable/FileAttachmentTable";
import {LinearProgress} from "@material-ui/core";
function FileAttachInt({array4}) {

    //Progress Tracking State.
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(0);
    const [success, setSuccess] = useState(0);
    const [file, setFile] = useState(0);
    const [downloadUri, setDownloadUri] = useState(0);

    //File attachment logic, saved the file in state.
    const onDrop = React.useCallback((selectedFile) => {
        const fileDropped = selectedFile[0];
        setFile(fileDropped);
        console.log(file);
        setSuccess(false);
        setProgress(0);
    })


    return (
        <div>
            <div className="file-component">
                <div className="input-form-container">
                    <form className="form">
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

                        <label htmlFor="lname">Attach the File</label>
                        <input style={{height: "30px", fontSize: "10px", paddingBottom: "30px", color: "white", fontWeight: "bold"}} onChange={onDrop}  type="file" id="lname" name="lastname" placeholder="Number of Chapters.."
                               className="form-input"/>

                        <div className="course-button-group button-row">
                            <button className="add-button">Add</button>
                            <button className="light-button">Reset</button>
                        </div>
                    </form>
                    <div style={{marginLeft:"19px", marginRight: "10px"}}>
                        <label style={{color: "white", fontWeight: "bold"}} htmlFor="lname">File Uploading Progress</label>
                        <LinearProgress  variant={"determinate"} value={progress}/>
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
