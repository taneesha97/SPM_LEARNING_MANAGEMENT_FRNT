import React from 'react'
import './ClassAnnouncement.css'
import CustomButton from "../../../Tutor/CourseMgntInt/CustomButtons/CustomButton";

function ClassAnnouncement(){
    return (
        <div className="class-announcement-container">
            <div className="class-announcement-header">
                <div className="class-section-header light">
                    Announcements
                </div>
                <div className="class-second-header">
                    Latest
                </div>
                <div className="class-announcement-body">
                    <div className="input-form-container">
                        <form className="form">
                            <label> Heading</label>
                            <div>
                                <input type="text" id="fname" name="firstname"
                                       placeholder="Announcement Heading Comes here..." className="form-input"/>
                            </div>
                            <label> Body</label>
                            <div>
                            <textarea type="text" id="fname" name="firstname" placeholder="Announcement body comes here..."
                                      className="form-area"/>
                            </div>
                            <div className="class-announcement-body-button-group">
                                <div className="class-announcement-button">
                                    <CustomButton name={"Discard"} color={"#FF5050"}/>
                                </div>
                                <div className="class-announcement-button">
                                    <CustomButton name={"Send"} color={"#e4bf5e"}/>
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