import React from 'react'
import CustomButton from "../../CourseMgntInt/CustomButtons/CustomButton";
import "./Announcement.css"

function Announcement() {
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
                                   placeholder="Announcement Heading Comes here..." className="form-input"/>
                        </div>
                        <label> Body</label>
                        <div>
                            <textarea type="text" id="fname" name="firstname" placeholder="Announcement body comes here..."
                                   className="form-area"/>
                        </div>
                        <div className="announcement-body-button-group">
                            <div className="announcement-button">
                                <CustomButton name={"Discard"} color={"#FF5050"}/>
                            </div>
                            <div className="announcement-button">
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

export default Announcement
