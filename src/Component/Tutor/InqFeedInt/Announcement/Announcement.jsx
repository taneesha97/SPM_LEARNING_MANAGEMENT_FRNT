import React, {useState} from 'react'
import './Announcement.css'
import CustomButton from "../../CourseMgntInt/CustomButtons/CustomButton";
function Announcement() {

    const [postData, setPostData] = useState({
        heading: '',
        message: ''
    });

    //Dummy method
    const printValue = (e) => {
        e.preventDefault();
        console.log('Printed with Different button')
    }

    //Announcement posting method.
    const postAnnouncement = (e) => {
        //Avoid page refreshing
        e.preventDefault();

        // Validation
        if (!postData.heading || !postData.message) {
            return;
        }
        console.log("Post Data From Announcement " + postData);

        fetch("http://localhost:8073/api/single/upload", {
            method: "POST",
            body: postData
        })
            .then(data => console.log(data.json()));
    }


    return (
        <div className="announcement-container">
            <div className="announcement-header">
                <div className="section-header light">
                    Announcements
                </div>
                <div className="second-header">
                    Latest
                </div>
                <div className="announcement-body">
                    <div className="input-form-container">
                    <form className="form">
                        <label> Heading</label>
                        <div>
                            <input type="text" id="fname" name="firstname"
                                   placeholder="Announcement Heading Comes here..." className="form-input"
                                   value={postData.heading}
                                   onChange={(e) => setPostData({...postData, heading: e.target.value})}
                                   required={true}/>
                        </div>
                        <label> Body</label>
                        <div>
                            <textarea type="text" id="fname" name="firstname" placeholder="Announcement body comes here..."
                                  className="form-area"
                                      value={postData.message}
                                      onChange={(e) => setPostData({...postData, message: e.target.value})}
                                      required={true}/>
                        </div>
                        <div className="announcement-body-button-group">
                            <div className="announcement-button">
                                <CustomButton type={"reset"} name={"Discard"} color={"#FF5050"}/>
                            </div>
                            <div className="announcement-button">
                                <CustomButton revokeMethod={postAnnouncement} name={"Send"} color={"#e4bf5e"}/>
                            </div>
                            <div className="announcement-button">
                                <CustomButton revokeMethod={printValue} name={"Show"} color={"#50C972"}/>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcement
